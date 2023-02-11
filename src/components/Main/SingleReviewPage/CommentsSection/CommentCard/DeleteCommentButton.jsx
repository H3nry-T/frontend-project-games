import React, { useState } from "react";
import { deleteCommentById } from "../../../../../utils/axiosSingleReview";
import styles from "../../SingleReviewPage.module.css";

function DeleteCommentButton({ comment_id, setCommentDeleteClickCount }) {
  const [isLoading, setIsLoading] = useState(false);
  //ON CLICK delete the comment by comment id
  const onClickHandler = () => {
    setIsLoading(true);

    deleteCommentById(comment_id).then(() => {
      setCommentDeleteClickCount((currState) => currState + 1);
    });
  };

  return (
    <button
      className={`${styles.deleteButton}`}
      onClick={onClickHandler}
      disabled={isLoading}
    >
      🗑
    </button>
  );
}

export default DeleteCommentButton;
