import React from "react";
import StarRating from "react-star-ratings";

const Star = ({ starClick, numberOfStars }) => (
  <>
    <StarRating
      changeRating={() => starClick(numberOfStars)}
      numberOfStars={numberOfStars}
      starDimenstion="20px"
      starSpacing="2px"
      starHoverColor="red"
      starEmptyColor="red"
    />
    <br />
  </>
);

export default Star;