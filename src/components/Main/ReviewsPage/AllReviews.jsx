import React from "react";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewsPage.module.css";

function AllReviews(props) {
  return (
    <aside className={styles.reviewListAside}>
      {props.allReviews.map((reviewObj) => {
        return (
          <ReviewCard
            key={reviewObj.review_id}
            reviewObj={reviewObj}
          ></ReviewCard>
        );
      })}
    </aside>
  );
}

export default AllReviews;
