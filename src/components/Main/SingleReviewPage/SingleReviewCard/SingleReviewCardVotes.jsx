import React from "react";
import styles from "../SingleReviewPage.module.css";

function SingleReviewCardVotes(props) {
  return (
    <div className={`${styles.flexContainer} ${styles.justifyContentCenter}`}>
      <div className={styles.smallWrapper}>
        <button
          className={`${styles.singleReviewPageButton} ${
            props.voteChange === -1 ? props.conditionalClass : ""
          }`}
          onClick={() => props.incReviewVotes(-1)}
        >
          -
        </button>
        <span>{props.singleReviewVotes + props.voteChange} votes</span>
        <button
          className={`${styles.singleReviewPageButton} ${
            props.voteChange === 1 ? props.conditionalClass : ""
          }`}
          onClick={() => props.incReviewVotes(1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SingleReviewCardVotes;
