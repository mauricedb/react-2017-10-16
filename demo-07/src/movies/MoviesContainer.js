import React, { PureComponent } from "react";
import MoviesPresentation from "./MoviesPresentation";

class MoviesContainer extends PureComponent {
  state = { movies: null };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          { id: 1, title: "Clockwork orange" },
          { id: 2, title: "Kill Bill" },
          { id: 3, title: "Full metal jacket" }
        ]
      });
    }, 2000);
  }

  render() {
    return <MoviesPresentation movies={this.state.movies} loaded={!!this.state.movies} />;
  }
}

export default MoviesContainer;
