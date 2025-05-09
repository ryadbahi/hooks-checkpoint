import React, { useState, useEffect } from "react";
import "./App.css";

// MovieCard component
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

// MovieList component
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

// Filter component
function Filter({ onFilterChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search Universes"
        onChange={(e) => onFilterChange({ title: e.target.value })}
      />
      <input
        type="range"
        min="1"
        max="10"
        onChange={(e) => onFilterChange({ rating: e.target.value })}
      />
    </div>
  );
}

// AddMovieForm component
function AddMovieForm({ onAddMovie }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 5,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(newMovie);
    setNewMovie({ title: "", description: "", posterURL: "", rating: 5 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Movie Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) =>
          setNewMovie({ ...newMovie, posterURL: e.target.value })
        }
      />
      <input
        type="number"
        value={newMovie.rating}
        onChange={(e) => setNewMovie({ ...newMovie, rating: e.target.value })}
      />
      <button type="submit">Add Universe</button>
    </form>
  );
}

// Main App component
function App() {
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState({ title: "", rating: 0 });

  const fetchMovies = async () => {
    const response = await fetch("/api/movies"); // Adjust API endpoint as needed
    const data = await response.json();
    setMovies(data);
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const handleAddMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.includes(filters.title) && movie.rating >= filters.rating
  );

  return (
    <div className="app">
      <Filter onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} loadMore={fetchMovies} />
      <AddMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
}

export default App;
