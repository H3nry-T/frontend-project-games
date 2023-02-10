import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import ReviewsPage from "./ReviewsPage/ReviewsPage";
import SingleReviewPage from "./SingleReviewPage/SingleReviewPage";
const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/*" element={<ReviewsPage />} />
        <Route path="/reviews/:review_id" element={<SingleReviewPage />} />
      </Routes>
    </main>
  );
};

export default Main;
