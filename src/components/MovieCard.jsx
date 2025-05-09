import React from "react";

const MovieCard = ({ movie }) => {
  const { title, overview, poster_path, vote_average } = movie;
  const posterUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={title} />
      <h3>{title}</h3>
      <p>{overview}</p>
      <span>⭐ {vote_average}</span>
    </div>
  );
};

export default MovieCard;
