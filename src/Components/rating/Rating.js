import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

function Rating({ rating, maxRating }) {
  const wholeRating = Math.floor(rating);
  const fractionalRating = rating - wholeRating;

  let stars = [];
  for (let i = 0; i < wholeRating; i++) {
    stars.push(
      <span key={i}>
        <BsStarFill />
      </span>
    );
  }
  if (fractionalRating > 0) {
    if (fractionalRating >= 0.5) {
      stars.push(
        <span key={wholeRating}>
          <BsStarHalf />
        </span>
      );
    } else {
      stars.push(<span key={wholeRating}>0</span>);
    }
  }
  for (let i = stars.length; i < maxRating; i++) {
    stars.push(
      <span key={i}>
        <BsStar />
      </span>
    );
  }
  return <div className="align-row">{stars}</div>;
}

export default Rating;
