function MovieCard({ title, description, posterURL, rating }) {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} className="movie-poster" />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>⭐ {rating}</span>
    </div>
  );
}
