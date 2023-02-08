import React from "react";
import styles from "../SingleReviewPage.module.css";

const CommentCard = ({ commentObj }) => {
  return (
    <article key={commentObj.comment_id} className={styles.commentCard}>
      <div
        className={`${styles.flexContainer} ${styles.spaceBetween} ${styles.commentHeader}`}
        style={{ marginBottom: "1rem", backgroundColor: "#bfbb9c" }}
      >
        <span>{commentObj.author}'s comment</span>{" "}
        <span>at {commentObj.created_at}</span>
      </div>
      <p className={`${styles.textLeft} ${styles.commentBody}`}>
        {commentObj.body}
      </p>
      <div className={`${styles.flexContainer} ${styles.justifyContentCenter}`}>
        <div className={styles.smallWrapper}>
          <button className={styles.singleReviewPageButton}>-</button>
          <span>{commentObj.votes} votes</span>
          <button className={styles.singleReviewPageButton}>+</button>
        </div>
      </div>
    </article>
  );
};

export default CommentCard;
