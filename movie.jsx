import React, { useEffect } from "react";
import "./styles.css";
import { useState } from "react";
import MovieModal from "../MovieModal/modal";
import { getMoviesBySearch } from "../../api";

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMoviesBySearch();
      setMovies(data?.Search || []);
    };

    fetchData().catch(console.error);
  }, []);

  const openModal = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };
  console.log(movies);
  return (
    <div className="container">
      <div className="header">
        <h2>Featured Movies</h2>
        <div className="navigation">
          <span>212</span>
          <span>See all</span>
          <div className="cube"></div>
          <div className="cube"></div>
        </div>
      </div>
      <div className="movie-list">
        {movies?.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => openModal(movie)}
          >
            <div className="movie-banner">
              <span className="featured-tag">FEATURED</span>
              <span className="rating">⭐ {movie.rating}</span>
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="movie-info">
              <div className="cube"></div>
              <div className="text-wrapper">
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <MovieModal movie={selectedMovie} onClose={closeModal} />
    </div>
  );
};

export default Movies;
