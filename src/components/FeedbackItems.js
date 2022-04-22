import React from "react";
import FeedbackItem from "./FeedbackItem";
import { useFeedbackContext } from "./context/FeedbackContext";

const FeedbackItems = () => {
  const { feedbacks } = useFeedbackContext();

  if (!feedbacks || feedbacks.length === 0) {
    return <p className="text-center fs-big">No feedbacks yet</p>;
  }
  return (
    <div className="feedback-items">
      {feedbacks.map((feedback) => {
        return <FeedbackItem feedback={feedback} key={feedback.id} />;
      })}
    </div>
  );
};

export default FeedbackItems;
