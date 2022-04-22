import React, { useContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = React.createContext({
  feedbacks: [],
  onDeleteFeedback: () => {},
  onAddFeedback: () => {},
  onEditFeedback: () => {},
  editFeedback: {},
});

const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    edit: false,
  });
  const onDeleteFeedback = (id) => {
    let newFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
    setFeedbacks(newFeedbacks);
  };

  const onAddFeedback = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };
  const onEditFeedback = (feedback) => {
    //get the feedback with id === id
    setEditFeedback({
      item: feedback,
      edit: true,
    });
  };

  const onUpdateFeedback = (id, updatedItem) => {
    setFeedbacks(
      feedbacks.map((feedback) =>
        feedback.id === id ? { ...updatedItem, id: id } : feedback
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        editFeedback,
        setFeedbacks,
        onDeleteFeedback,
        onAddFeedback,
        onEditFeedback,
        onUpdateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedbackContext = () => {
  return useContext(FeedbackContext);
};

export { FeedbackContext, FeedbackProvider };
