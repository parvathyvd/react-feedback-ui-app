import "./App.css";
import FeedbackItems from "./components/FeedbackItems";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import FeedbackFooter from "./components/FeedbackFooter";

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                {" "}
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackItems />
              </>
            }
          ></Route>
          <Route path="/about" exact element={<About />}></Route>
        </Routes>
        <FeedbackFooter />
      </main>
    </>
  );
}

export default App;
