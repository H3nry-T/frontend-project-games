import React, { useEffect, useState } from "react";
import { getAllReviews } from "../../../utils/axios";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewsPage.module.css";

const ReviewsPage = () => {
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => {
    getAllReviews().then((allReviewsFromApi) => {
      setAllReviews([...allReviewsFromApi]);
    });
  }, []);

  return (
    <>
      <section className={styles.allReviewContainer}>
        <aside className={styles.reviewFilterAside}>
          <h2>filter bar goes here</h2>
        </aside>
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
    </>
  );
};

export default ReviewsPage;

//category: "strategy"

// comment_count: "4"

// created_at: "1970-01-10T02:56:38.400Z"

// designer: "Emerson Matsuuchi"

// owner: "tickle122"

// review_id: 18

// review_img_url: "https://images.pexels.com/photos/6333894/pexels-photo-6333894.jpeg?w=700&h=700"

// title: "Reef"

// votes: 6
