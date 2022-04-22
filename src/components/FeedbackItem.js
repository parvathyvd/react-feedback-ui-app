import React from "react";
import Card from "./UI/Card";
import { ImCross } from "react-icons/im";
import { AiOutlineEdit } from "react-icons/ai";
import { useFeedbackContext } from "./context/FeedbackContext";

const FeedbackItems = ({ feedback }) => {
  const { onDeleteFeedback, onEditFeedback } = useFeedbackContext();

  return (
    <div className="feedback-item">
      <Card>
        <p className="stats">{feedback.rating}</p>
        <div className="edit-delete">
          <AiOutlineEdit
            className="icon-edit"
            onClick={() => onEditFeedback(feedback)}
          />
          <ImCross
            className="icon-cross"
            onClick={() => onDeleteFeedback(feedback.id)}
          />
        </div>

        <p className="description">{feedback.text}</p>
      </Card>
    </div>
  );
};

export default FeedbackItems;
