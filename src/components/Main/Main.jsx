import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import ReviewsPage from "./ReviewsPage/ReviewsPage";
import SingleReview from "./SingleReview/SingleReview";
const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<ReviewsPage />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
      </Routes>
    </main>
  );
};

export default Main;
