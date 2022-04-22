import React from "react";
import Card from "./UI/Card";
import { ImCross } from "react-icons/im";

const FeedbackItems = ({ feedback, onDelete }) => {
  const onDeleteHandler = (id) => {
    console.log(id);
    onDelete(id);
  };
  return (
    <div className="feedback-item">
      <Card>
        <p className="stats">{feedback.rating}</p>
        <ImCross
          className="icon-cross"
          onClick={() => onDeleteHandler(feedback.id)}
        />
        <p className="description">{feedback.text}</p>
      </Card>
    </div>
  );
};

export default FeedbackItems;
