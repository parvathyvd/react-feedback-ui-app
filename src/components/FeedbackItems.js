import React from "react";
import FeedbackItem from "./FeedbackItem";

const FeedbackItems = ({ feedbacks, onDelete }) => {
  if (!feedbacks || feedbacks.length === 0) {
    return <p className="text-center fs-big">No feedbacks yet</p>;
  }
  return (
    <div className="feedback-items">
      {feedbacks.map((feedback) => {
        return (
          <FeedbackItem
            feedback={feedback}
            key={feedback.id}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default FeedbackItems;
