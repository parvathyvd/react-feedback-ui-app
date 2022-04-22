import React from "react";

const FeedbackStats = ({ feedbacks }) => {
  let average =
    feedbacks.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedbacks.length;
  console.log(average);
  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h3>{feedbacks.length} Reviews</h3>
      <h3>Average Rating: {isNaN(average) ? 0 : average}</h3>
    </div>
  );
};

export default FeedbackStats;
