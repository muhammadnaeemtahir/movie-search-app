import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";

import "./App.css";

const API_KEY = `56696df9`;
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Superman");
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <section className="py-sm-5 py-3">
          <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
            <div class="input-group">
              <input
                type="search"
                value={searchMovie}
                class="form-control"
                placeholder="Search"
                onChange={(e) => setSearchMovie(e.target.value)}
              />
              <button
                class="btn btn-warning"
                type="button"
                onClick={() => {
                  if (searchMovie.trim() !== "") {
                    searchMovies(searchMovie);
                  } else {
                    alert("Search cannot be empty");
                  }
                }}
              >
                <i class="fa-brands fa-searchengin fs-3"></i>
              </button>
            </div>
          </form>
        </section>
        <div className="row pb-sm-5 pb-3">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <>
                <div className="col-sm-3">
                  <MovieCard Movie={movie} />
                </div>
              </>
            ))
          ) : (
            <p className="text-center">No movies found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
