import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getReviewsByParams } from "../../../utils/axiosAllReviews";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewsPage.module.css";

const AllReviewsByParams = (props) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  const [allReviewsByQueryParams, setAllReviewsByQueryParams] = useState([]);

  useEffect(() => {
    getReviewsByParams(selectedCategory).then(
      (allReviewsByQueryParamsFromApi) => {
        console.log(allReviewsByQueryParamsFromApi);
        setAllReviewsByQueryParams(allReviewsByQueryParamsFromApi);
      }
    );
  }, [selectedCategory]);

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
