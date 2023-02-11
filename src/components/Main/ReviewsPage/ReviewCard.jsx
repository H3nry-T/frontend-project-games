import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReviewsPage.module.css";

export default function ReviewCard({ reviewObj }) {
  const date = new Date(Date.parse(reviewObj.created_at));
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/reviews/${reviewObj.review_id}`);
  };
  return (
    <div className={styles.reviewCard} onClick={handleOnClick}>
      <img
        src={reviewObj.review_img_url}
        className={styles.reviewImg}
        draggable="false"
        alt="board game"
      ></img>
      <p className={styles.strong} style={{ width: "15%" }}>
        {reviewObj.title}
      </p>
      <p>{reviewObj.category} game</p>
      <p>{reviewObj.votes} votes</p>
      <p>{reviewObj.comment_count} comments</p>
      <p>{date.toLocaleDateString()}</p>
      <p>
        {reviewObj.designer === "Uncredited"
          ? "Uncredited"
          : `designed by ${reviewObj.designer}`}
      </p>
      <p>{reviewObj.owner}</p>
    </div>
  );
}
