const MovieCard = ({movie}) => {
  return(
    <div className='moviecard'>
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://vai.placeholder.com/400' } alt={movie.Title} />
      </div>
      <div className="moviedetails">
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
}

export default MovieCard;