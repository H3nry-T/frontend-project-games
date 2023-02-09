import React, { useEffect, useState } from "react";
import { patchCommentByReviewId } from "../../../../../utils/axiosSingleReview";
import styles from "../../SingleReviewPage.module.css";
import CommentCardVotes from "./CommentCardVotes";

const CommentCard = ({ commentObj }) => {
  const comment_id = commentObj.comment_id;
  const [voteChange, setVoteChange] = useState(0);
  const date = new Date(Date.parse(commentObj.created_at));
  const [conditionalClass, setConditionalClass] = useState("");

  useEffect(() => {
    setConditionalClass(
      voteChange === 1
        ? styles.greenClass
        : voteChange === -1
        ? styles.redClass
        : ""
    );
  }, [voteChange]);

  function incCommentVotes(comment_id, value) {
    if (voteChange === 1) {
      setVoteChange((currVoteChange) => currVoteChange + -1);
      patchCommentByReviewId(comment_id, -1);
    } else if (voteChange === -1) {
      setVoteChange((currVoteChange) => currVoteChange + 1);
      patchCommentByReviewId(comment_id, 1);
    } else {
      setVoteChange((currVoteChange) => currVoteChange + value);
      patchCommentByReviewId(comment_id, value);
    }
  }

  return (
    <article key={commentObj.comment_id} className={styles.commentCard}>
      <section
        className={`${styles.flexContainer} ${styles.spaceBetween} ${styles.commentHeader}`}
        style={{ marginBottom: "1rem", backgroundColor: "#bfbb9c" }}
      >
        <span>{commentObj.author}'s comment</span>{" "}
        <span>at {date.toLocaleDateString()}</span>
      </section>
      <p className={`${styles.textLeft} ${styles.commentBody}`}>
        {commentObj.body}
      </p>
      <CommentCardVotes
        comment_id={comment_id}
        voteChange={voteChange}
        conditionalClass={conditionalClass}
        votes={commentObj.votes}
        incCommentVotes={incCommentVotes}
      ></CommentCardVotes>
    </article>
  );
};

export default CommentCard;
