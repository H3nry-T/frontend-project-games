import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllReviews } from "../../../utils/axiosAllReviews";
import AllReviews from "./AllReviews";
import AllReviewsByParams from "./AllReviewsByParams";
import FilterBar from "./FilterBar/FilterBar";
import styles from "./ReviewsPage.module.css";

const ReviewsPage = () => {
  const [allReviews, setAllReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllReviews().then((allReviewsFromApi) => {
      setAllReviews([...allReviewsFromApi]);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading === true ? (
        <h1 className={styles.loading}>Loading...</h1>
      ) : (
        <section className={styles.allReviewContainer}>
          <FilterBar
            allReviews={allReviews}
            setAllReviews={setAllReviews}
          ></FilterBar>
          <Routes>
            <Route
              path="/"
              element={<AllReviews allReviews={allReviews} />}
            ></Route>
            <Route
              path="/reviews?"
              element={<AllReviewsByParams allReviews={allReviews} />}
            ></Route>
          </Routes>
        </section>
      )}
    </>
  );
};

export default ReviewsPage;
