import React, { useEffect, useState } from "react";
import { patchReviewByReviewId } from "../../../../utils/axiosSingleReview";
import styles from "../SingleReviewPage.module.css";
import SingleReviewCardInfo from "./SingleReviewCardInfo";
import SingleReviewCardVotes from "./SingleReviewCardVotes";

const SingleReviewCard = ({ date, singleReview }) => {
  const [voteChange, setVoteChange] = useState(0);
  const [singleReviewVotes, setSingleReviewVotes] = useState([]);
  const [conditionalClass, setConditionalClass] = useState("");
  const review_id = singleReview.review_id;

  useEffect(() => {
    setSingleReviewVotes(singleReview.votes);
  }, [singleReview]);

  useEffect(() => {
    setConditionalClass(
      voteChange === 1
        ? styles.greenClass
        : voteChange === -1
        ? styles.redClass
        : ""
    );
  }, [voteChange]);

  function incReviewVotes(value) {
    if (voteChange === 1) {
      setVoteChange((currVoteChange) => currVoteChange - 1);
      patchReviewByReviewId(review_id, -1).catch((error) =>
        console.error(error)
      );
    } else if (voteChange === -1) {
      setVoteChange((currVoteChange) => currVoteChange + 1);
      patchReviewByReviewId(review_id, +1).catch((error) =>
        console.error(error)
      );
    } else {
      setVoteChange((currVoteChange) => currVoteChange + value);
      patchReviewByReviewId(review_id, value).catch((error) =>
        console.error(error)
      );
    }
  }

  return (
    <section className={styles.singleReview}>
      <SingleReviewCardInfo
        singleReview={singleReview}
        date={date}
      ></SingleReviewCardInfo>
      <hr></hr>
      <article>
        <div style={{ textAlign: "left" }}>
          <p>{singleReview.review_body}</p>
        </div>
        <SingleReviewCardVotes
          voteChange={voteChange}
          singleReviewVotes={singleReviewVotes}
          conditionalClass={conditionalClass}
          incReviewVotes={incReviewVotes}
        ></SingleReviewCardVotes>
      </article>
    </section>
  );
};

export default SingleReviewCard;
