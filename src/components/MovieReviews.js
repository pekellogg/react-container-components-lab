import { head } from "fetch-mock";
import React from "react";

const Review = ({ headline, byline, link, summary_short }) => (
  <div 
    className="review"
    key={headline}
  >
    <header>
      <a className="review-link" href={link.url}>
        {headline}
      </a>
      <div className="author">
        {byline}
      </div>
    </header>
    {summary_short}
  </div>
);

const MovieReviews = ({ reviews }) => (
  <div className="review-list">
    {reviews.map(Review)}
  </div>
);

export default MovieReviews;