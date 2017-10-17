import React, { Component } from "react";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/dom/ajax'
import 'rxjs/add/observable/interval'
import 'rxjs/add/operator/switchMap'

class Movies extends Component {
  state = {
    movies: []
  };
  componentDidMount() {
    this.subscription = Observable.interval(1000)
      .switchMap(() => Observable.ajax.getJSON("/api/movies"))
      .subscribe(movies => this.setState({ movies }));

    //   setTimeout(() => this.subscription.unsubscribe(), 5000)
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return (
      <ul>
        {this.state.movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    );
  }
}

export default Movies;
