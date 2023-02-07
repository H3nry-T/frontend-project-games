import React, { useEffect, useState } from "react";
import { getAllReviews } from "../../../utils/axios";
import FilterBar from "./FilterBar";
import ReviewCard from "./ReviewCard";
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
          <FilterBar allReviews={allReviews}></FilterBar>
          <aside className={styles.reviewListAside}>
            {allReviews.map((reviewObj) => {
              return (
                <ReviewCard
                  key={reviewObj.review_id}
                  reviewObj={reviewObj}
                ></ReviewCard>
              );
            })}
          </aside>
        </section>
      )}
    </>
  );
};

export default ReviewsPage;
