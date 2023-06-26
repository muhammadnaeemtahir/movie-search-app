const MovieCard = ({ Movie }) => {
  return (
    <>
      <div className="card text-bg-dark mb-3 movie">
        <img
          src={
            Movie.Poster !== "N/A"
              ? Movie.Poster
              : `https://via.placeholder.com/400`
          }
          className="card-img opacity-50"
          alt={Movie.Title}
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{Movie.Title}</h5>
          <p className="card-text">{Movie.Year}</p>
          <p className="card-text">
            <small>{Movie.Type !== "N/A" ? Movie.Type : "Undefined"}</small>
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
