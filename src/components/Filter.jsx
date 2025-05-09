import React from "react";

const Filter = ({ searchTerm, setSearchTerm, rating, setRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <input
        type="range"
        min="0"
        max="10"
        step="0.1"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <span>Rating: {rating}</span>
    </div>
  );
};

export default Filter;
