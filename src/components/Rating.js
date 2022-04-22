import React, { useState } from "react";

const Rating = ({ onRatingChange }) => {
  const radioButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [selected, setSelected] = useState(10);
  const handleRatingChange = (e) => {
    console.log(e.target.value);
    setSelected(+e.target.value);
    onRatingChange(+e.target.value);
  };
  return (
    <ul className="rating">
      {radioButtons.map((num) => {
        return (
          <li key={`num${num}`}>
            <input
              type="radio"
              name="rating"
              id={`num${num}`}
              value={num}
              onChange={handleRatingChange}
              checked={selected === num}
            />
            <label htmlFor={`num${num}`}>
              <span className="num-display">{num}</span>
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default Rating;
