import React from "react";
import "./styles.css";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null; // No film,no display in browser

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <img src={movie.image} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Rating: ⭐ {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieModal;
