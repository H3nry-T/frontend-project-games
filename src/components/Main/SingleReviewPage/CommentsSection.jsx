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
              <p>{commentObj.author}'s comment</p>
              <p>{commentObj.body}</p>
              <p>{commentObj.created_at}</p>
              <div
                className={`${styles.flexContainer} ${styles.justifyContentCenter}`}
              >
                <div className={styles.smallWrapper}>
                  <button>-</button>
                  <span>{commentObj.votes}</span>
                  <button>+</button>
                </div>
              </div>
              <p
                onClick={(e) => {
                  console.log(e.target);
                }}
              >
                {commentObj.comment_id}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CommentsSection;
