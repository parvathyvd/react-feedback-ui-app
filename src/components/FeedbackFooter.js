import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillBulb } from "react-icons/ai";

const FeedbackFooter = () => {
  return (
    <footer>
      <NavLink to="/about">
        <AiFillBulb className="bulb-icon" />
      </NavLink>
    </footer>
  );
};

export default FeedbackFooter;
