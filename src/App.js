import { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MovieCard from './MovieCard';

function App() {

  // const movie1 = {
  //   Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  //   Title: "Avengers: Endgame",
  //   Type: "movie",
  //   Year: "2019",
  //   imdbID: "tt4154796"
  // }

  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('');

  const searchMovies = async (title) =>{
    const data = await fetch(
      `http://www.omdbapi.com?apikey=2c4f415d&s=${title}`
    );
    const jsonData = await data.json();
    setMovies(jsonData.Search);
  }

  useEffect(()=>{
    searchMovies("avengers")
  }, []);

  return (
    <div className='app'>

      <h1>MovieMania</h1>

      <div className='search'>
        <input className='searchinput' type='text' placeholder='Search for movies here..' value={searchTitle} onChange={ (e) => setSearchTitle(e.target.value)} />
        <FontAwesomeIcon icon={faSearch} className='searchicon' onClick={() => searchMovies(searchTitle)}/>
      </div>

      {
        movies.length > 0 ? (
          <div className='container'>
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
            ))}
          </div>
        ) : (
          <div className='empty'>
            <h2>No movies found</h2>
          </div>
        )
      }

    </div>
  );
}

export default App;
