import PropTypes from "prop-types";

const Movie = ({ movie }) => movie.title;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Movie;
