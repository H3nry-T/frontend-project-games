import React, { useEffect, useState } from "react";
import { getCommentsByReviewId } from "../../../../utils/axiosSingleReview";
import CommentCard from "./CommentCard/CommentCard";
import styles from "../SingleReviewPage.module.css";
import CommentAdder from "./CommentAdder";

const CommentsSection = ({ review_id, singleReview }) => {
  const [commentsByReviewId, setCommentsByReviewId] = useState([]);
  const [commentDeleteClickCount, setCommentDeleteClickCount] = useState(0);
  const [reviewCommentCount, setReviewCommentCount] = useState(0);
  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setCommentsByReviewId(commentsFromApi);
    });
  }, [review_id, commentDeleteClickCount]);

  useEffect(() => {
    setReviewCommentCount(commentsByReviewId.length);
  }, [commentsByReviewId]);
  return (
    <section className={styles.commentsSection}>
      <CommentAdder
        comment_count={singleReview.comment_count}
        reviewCommentCount={reviewCommentCount}
        setCommentsByReviewId={setCommentsByReviewId}
        review_id={review_id}
      ></CommentAdder>
      {commentsByReviewId.map((commentObj) => {
        return (
          <CommentCard
            key={commentObj.comment_id}
            commentObj={commentObj}
            setCommentDeleteClickCount={setCommentDeleteClickCount}
          />
        );
      })}
    </section>
  );
};

export default CommentsSection;
