import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { FeedbackProvider } from "./components/context/FeedbackContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FeedbackProvider>
      <Router>
        <App />
      </Router>
    </FeedbackProvider>
  </React.StrictMode>
);
