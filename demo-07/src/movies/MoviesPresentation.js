import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";

const MoviesPresentation = ({ movies, loaded }) => {
  console.log("render MoviesPresentation");
  return (
    <div>
      <h2>Movies</h2>
      <ul>
        {loaded ? (
          movies.map(movie => (
            <li key={movie.id}>
              <Movie movie={movie} />
              {/* Movie({ movie2: movie })*/}
            </li>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </div>
  );
};

MoviesPresentation.propTypes = {
  movies: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.any]),
  loaded: PropTypes.bool.isRequired
};

MoviesPresentation.defaultProps = {
  movies: [],
  loaded: true
};

export default MoviesPresentation;
