import React from "react";
import styles from "../../SingleReviewPage.module.css";

function CommentCardVotes(props) {
  return (
    <section
      className={`${styles.flexContainer} ${styles.justifyContentCenter}`}
    >
      <div className={styles.smallWrapper}>
        <button
          className={`${styles.singleReviewPageButton} ${
            props.voteChange === -1 ? props.conditionalClass : ""
          }`}
          onClick={() => props.incCommentVotes(props.comment_id, -1)}
        >
          -
        </button>

        <span>{props.votes + props.voteChange} votes</span>
        <button
          className={`${styles.singleReviewPageButton} ${
            props.voteChange === 1 ? props.conditionalClass : ""
          }`}
          onClick={() => props.incCommentVotes(props.comment_id, 1)}
        >
          +
        </button>
      </div>
    </section>
  );
}

export default CommentCardVotes;
