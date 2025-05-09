import React, { useState } from "react";

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [posterPath, setPosterPath] = useState("");
  const [voteAverage, setVoteAverage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(),
      title,
      overview,
      poster_path: posterPath,
      vote_average: parseFloat(voteAverage),
    };
    addMovie(newMovie);
    setTitle("");
    setOverview("");
    setPosterPath("");
    setVoteAverage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Overview"
        value={overview}
        onChange={(e) => setOverview(e.target.value)}
        required
      ></textarea>
      <input
        type="text"
        placeholder="Poster Path"
        value={posterPath}
        onChange={(e) => setPosterPath(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        value={voteAverage}
        onChange={(e) => setVoteAverage(e.target.value)}
        min="0"
        max="10"
        step="0.1"
        required
      />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
