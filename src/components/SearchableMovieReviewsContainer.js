import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "9kZftfNHw4puKwFOv667cF5N2lXPHgiK";
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?"
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: "",
    reviews: []
  };

  searchInputChangeHandler = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  submitHandler = (event) => {
    event.preventDefault();
    fetch(URL.concat(this.state.searchTerm))
    .then(res => res.json())
    .then(res => this.setState({ reviews: res.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.submitHandler}>
          <input 
            id="search-input"
            type="text"
            onChange={this.searchInputChangeHandler}
          />
          <button type="submit">
            Submit
          </button>
        </form>
        {this.state.reviews.lengh > 0 && <h3>Search for Movie Reviews: </h3>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  };

};

export default SearchableMovieReviewsContainer;