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
