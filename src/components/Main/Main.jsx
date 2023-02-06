import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./Main.module.css";
import ReviewsPage from "./ReviewsPage/ReviewsPage";
const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<ReviewsPage />} />
      </Routes>
    </main>
  );
};

export default Main;
