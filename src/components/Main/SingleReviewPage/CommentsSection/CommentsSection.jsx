import React, { useEffect, useState } from "react";
import { getCommentsByReviewId } from "../../../../utils/axiosSingleReview";
import CommentCard from "./CommentCard/CommentCard";
import styles from "../SingleReviewPage.module.css";
import CommentAdder from "./CommentAdder";

const CommentsSection = ({ review_id, singleReview }) => {
  const [commentsByReviewId, setCommentsByReviewId] = useState([]);
  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) => {
      setCommentsByReviewId(commentsFromApi);
    });
  }, [review_id]);

  return (
    <section className={styles.commentsSection}>
      <CommentAdder
        comment_count={singleReview.comment_count}
        setCommentsByReviewId={setCommentsByReviewId}
        review_id={review_id}
      ></CommentAdder>
      {commentsByReviewId.map((commentObj) => {
        return (
          <CommentCard key={commentObj.comment_id} commentObj={commentObj} />
        );
      })}
    </section>
  );
};

export default CommentsSection;
