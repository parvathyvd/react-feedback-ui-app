import React, { useState } from "react";
import Rating from "./Rating";
import Button from "./UI/Button";
import Card from "./UI/Card";

const FeedbackForm = ({ onAdd }) => {
  const [input, setInput] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const handleInputChange = (e) => {
    if (e.target.value === "") {
      setMessage(null);
      setBtnDisabled(true);
    } else if (e.target.value !== "" && e.target.value.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Please enter atleast 10 characters!");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    console.log(e.target.value);
    setInput(e.target.value);
  };
  const onRatingChange = (ratingValue) => {
    console.log("rating is", ratingValue);
    setRating(ratingValue);
  };
  const addFeedbackHandler = (e) => {
    e.preventDefault();
    if (input !== "" && input.trim().length > 10) {
      const newFeedback = {
        id: new Date().toISOString(),
        text: input,
        rating: rating,
      };
      onAdd(newFeedback);
      setInput("");
    }
  };
  return (
    <Card>
      <form onSubmit={addFeedbackHandler}>
        <h2 className="text-center">How would you rate our service?</h2>
        <Rating onRatingChange={onRatingChange} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleInputChange}
            value={input}
          />
          <Button type="submit" version="primary" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="text-center fs-bg">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
