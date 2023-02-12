import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllReviews } from "../../../utils/axiosAllReviews";
import AllReviews from "./AllReviews";
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
              path="/reviews?"
              element={<AllReviews allReviews={allReviews} />}
            ></Route>
            <Route path="/*" element={<h1>404 Not Found</h1>}></Route>
          </Routes>
        </section>
      )}
    </>
  );
};

export default ReviewsPage;
