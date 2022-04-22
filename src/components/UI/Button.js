import React from "react";

const Button = ({ children, version, type, isDisabled }) => {
  // console.log("button", isDisabled, type, version);
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
};

export default Button;
