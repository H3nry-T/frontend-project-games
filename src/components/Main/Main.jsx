import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import styles from "./Main.module.css";
import ReviewsPage from "./ReviewsPage/ReviewsPage";
import SingleReviewPage from "./SingleReviewPage/SingleReviewPage";
const Main = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Log in screen</h1>
              <button
                onClick={() => {
                  navigate("/reviews");
                }}
              >
                log me in!
              </button>
            </>
          }
        />
        <Route path="/*" element={<ReviewsPage />} />
        <Route path="/reviews/:review_id" element={<SingleReviewPage />} />
      </Routes>
    </main>
  );
};

export default Main;
