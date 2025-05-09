function MovieList({ movies, loadMore }) {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
      <button onClick={loadMore}>Load More Universes</button>
    </div>
  );
}
