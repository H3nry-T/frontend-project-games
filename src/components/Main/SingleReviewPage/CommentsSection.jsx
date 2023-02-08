import React, { useEffect, useState } from "react";
import { getCommentsByReviewId } from "../../../utils/axiosSingleReview";
import styles from "./SingleReviewPage.module.css";

const CommentsSection = ({ review_id, singleReview }) => {
  const [commentsByReviewId, setCommentsByReviewId] = useState([]);
  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      console.log(commentsFromApi);
      setCommentsByReviewId(commentsFromApi);
    });
  }, []);
  return (
    <section className={styles.commentsSection}>
      <div>
        <p className={`${styles.smallWrapper} ${styles.topLeft}`}>
          {singleReview.comment_count} comments
        </p>
        {commentsByReviewId.map((commentObj) => {
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
              <div
                className={`${styles.flexContainer} ${styles.justifyContentCenter}`}
              >
                <div className={styles.smallWrapper}>
                  <button className={styles.singleReviewPageButton}>-</button>
                  <span>{commentObj.votes} votes</span>
                  <button className={styles.singleReviewPageButton}>+</button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CommentsSection;
