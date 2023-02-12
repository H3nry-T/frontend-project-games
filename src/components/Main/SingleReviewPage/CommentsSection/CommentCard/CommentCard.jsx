import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../../context/userContext";
import { patchCommentByReviewId } from "../../../../../utils/axiosSingleReview";
import styles from "../../SingleReviewPage.module.css";
import CommentCardVotes from "./CommentCardVotes";
import DeleteCommentButton from "./DeleteCommentButton";

const CommentCard = ({ commentObj, setCommentDeleteClickCount }) => {
  const comment_id = commentObj.comment_id;
  const [voteChange, setVoteChange] = useState(0);
  const date = new Date(Date.parse(commentObj.created_at));
  const [conditionalClass, setConditionalClass] = useState("");
  const { loggedInUser } = useContext(UserContext);

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
      >
        <span>{commentObj.author}'s comment</span>{" "}
        <span>at {date.toLocaleDateString()}</span>
      </section>
      <p className={`${styles.textLeft} ${styles.commentBody}`}>
        {commentObj.body}
      </p>
      <section
        className={`${styles.flexContainer} ${styles.spaceBetween} ${styles.alignItemsCenter}`}
      >
        <CommentCardVotes
          comment_id={comment_id}
          voteChange={voteChange}
          conditionalClass={conditionalClass}
          votes={commentObj.votes}
          incCommentVotes={incCommentVotes}
        ></CommentCardVotes>

        {commentObj.author === loggedInUser.username ? (
          <DeleteCommentButton
            comment_id={comment_id}
            setCommentDeleteClickCount={setCommentDeleteClickCount}
          />
        ) : (
          ""
        )}
      </section>
    </article>
  );
};

export default CommentCard;
