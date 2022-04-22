import "./App.css";
import FeedbackItems from "./components/FeedbackItems";
import Header from "./components/Header";
import FeedbackData from "./components/data/FeedbackData";
import { useState } from "react";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedbacks, setFeedbacks] = useState(FeedbackData);
  const onDeleteFeedback = (id) => {
    let newFeedbacks = feedbacks.filter((feedback) => feedback.id !== id);
    setFeedbacks(newFeedbacks);
  };
  const onFeedbackAdd = (newFeedback) => {
    setFeedbacks([...feedbacks, newFeedback]);
  };
  return (
    <>
      <Header />
      <main className="container">
        <FeedbackForm onAdd={onFeedbackAdd} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackItems feedbacks={feedbacks} onDelete={onDeleteFeedback} />
      </main>
    </>
  );
}

export default App;
