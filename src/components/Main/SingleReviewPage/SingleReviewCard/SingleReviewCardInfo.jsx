import React from "react";
import styles from "../SingleReviewPage.module.css";

function SingleReviewCardInfo(props) {
  return (
    <article className={`${styles.flexContainer} ${styles.spaceEvenly}`}>
      <img
        style={{
          margin: "0 1rem 0 0",
        }}
        className={styles.reviewImg}
        src={props.singleReview.review_img_url}
        draggable="false"
        alt="board game"
      ></img>
      <p>
        <strong>{props.singleReview.owner}'s</strong> review on{" "}
        <strong>{props.singleReview.title}</strong>
      </p>
      <p>designed by {props.singleReview.designer}</p>
      <p>{props.singleReview.category} game</p>
      <p>created at {props.date.toLocaleDateString()}</p>
    </article>
  );
}

export default SingleReviewCardInfo;
