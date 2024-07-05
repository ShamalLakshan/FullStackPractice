import React from "react";

const MovieCard = (props) => {
  return (
    <div className="movie">
      <div>
        <p>{movie_1.Year}</p>
      </div>

      <div>
        <img src={movie_1.Poster} />
      </div>

      <div>
        <span>{movie_1.Type}</span>
        <h3>{movie_1.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;