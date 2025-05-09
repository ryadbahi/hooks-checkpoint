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
      {/* Form fields */}
      <button type="submit">Add Universe</button>
    </form>
  );
}
