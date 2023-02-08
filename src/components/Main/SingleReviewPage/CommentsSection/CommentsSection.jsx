import React, { useEffect, useState } from "react";
import { getCommentsByReviewId } from "../../../../utils/axiosSingleReview";
import CommentCard from "./CommentCard";
import styles from "../SingleReviewPage.module.css";

const CommentsSection = ({ review_id, singleReview }) => {
  const [commentsByReviewId, setCommentsByReviewId] = useState([]);
  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
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
            <CommentCard key={commentObj.comment_id} commentObj={commentObj} />
          );
        })}
      </div>
    </section>
  );
};

export default CommentsSection;
