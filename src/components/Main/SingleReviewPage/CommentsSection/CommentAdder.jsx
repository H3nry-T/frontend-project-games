import React, { useContext, useState } from "react";
import { UserContext } from "../../../../context/userContext";
import { postCommentByReviewId } from "../../../../utils/axiosSingleReview";
import styles from "../SingleReviewPage.module.css";

function CommentAdder(props) {
  const { comment_count, review_id, setCommentsByReviewId } = props;
  const [commentBody, setCommentBody] = useState("");
  const [conditionalClass, setConditionalClass] = useState("");
  const {
    loggedInUser: { username },
  } = useContext(UserContext);
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  return (
    <article className={styles.flexContainer}>
      <p
        className={`${styles.smallWrapper} ${styles.topLeft}`}
        style={{
          fontSize: "16px",
        }}
      >
        {comment_count} comments
      </p>
      <form
        style={{
          width: "100%",
          margin: "1rem",
        }}
        className={`${styles.flexContainer} ${styles.commentAdderForm} ${styles.spaceEvenly}`}
        onSubmit={handleOnSubmit()}
      >
        <input
          className={styles.commentAdderInput}
          type="text"
          onChange={handleOnChange()}
          value={commentBody}
          placeholder="add your comment here"
        />
        <button
          type="submit"
          className={`${styles.commentAdderButton} ${conditionalClass}`}
        >
          Add
        </button>
      </form>
    </article>
  );

  function handleOnSubmit() {
    return (e) => {
      e.preventDefault();
      if (commentBody !== "" && !isFormSubmitting) {
        setIsFormSubmitting(true);
        postCommentByReviewId(review_id, username, commentBody)
          .then((postedCommentFromApi) => {
            setCommentsByReviewId((currCommentsByReviewId) => [
              postedCommentFromApi,
              ...currCommentsByReviewId,
            ]);
            setCommentBody("");
            setConditionalClass("");
            setIsFormSubmitting(false);
          })
          .catch((error) => {
            setIsFormSubmitting(false);
          });
      } else {
        if (commentBody === "") {
          setConditionalClass(styles.redClass);
        } else {
          setConditionalClass(styles.greenClass);
        }
      }
    };
  }

  function handleOnChange() {
    return (e) => {
      if (e.target.value === "") {
        setConditionalClass("");
      } else {
        setConditionalClass(styles.greenClass);
      }
      setCommentBody(e.target.value);
    };
  }
}

export default CommentAdder;
