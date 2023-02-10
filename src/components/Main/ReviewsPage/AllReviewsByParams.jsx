import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getReviewsByParams } from "../../../utils/axiosAllReviews";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewsPage.module.css";

const AllReviewsByParams = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  const [allReviewsByQueryParams, setAllReviewsByQueryParams] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getReviewsByParams(selectedCategory).then(
      (allReviewsByQueryParamsFromApi) => {
        console.log(allReviewsByQueryParamsFromApi);
        setAllReviewsByQueryParams(allReviewsByQueryParamsFromApi);
        setLoading(false);
      }
    );
  }, [selectedCategory]);

  if (loading) {
    return (
      <h1 className={`${styles.reviewListAside} ${styles.alignItemsCenter}`}>
        Loading...
      </h1>
    );
  }

  return (
    <aside className={styles.reviewListAside}>
      {allReviewsByQueryParams.map((reviewObj) => {
        return (
          <ReviewCard
            key={reviewObj.review_id}
            reviewObj={reviewObj}
          ></ReviewCard>
        );
      })}
    </aside>
  );
};

export default AllReviewsByParams;
