import React, { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovieForm from "./components/AddMovieForm";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [rating, setRating] = useState(0);
  const [userMovies, setUserMovies] = useState([]);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [apiKey]);

  const addMovie = (movie) => {
    setUserMovies([movie, ...userMovies]);
  };

  const filteredMovies = [...userMovies, ...movies].filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      movie.vote_average >= rating
  );

  return (
    <div className="app">
      <h1>🎬 CineVerse Movie</h1>
      <Filter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        rating={rating}
        setRating={setRating}
      />
      <AddMovieForm addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
