import React from "react";
import { deleteCommentById } from "../../../../../utils/axiosSingleReview";
import styles from "../../SingleReviewPage.module.css";

function DeleteCommentButton({ comment_id, setCommentDeleteClickCount }) {
  //ON CLICK delete the comment by comment id
  function onClickHandler() {
    deleteCommentById(comment_id).then(() => {
      setCommentDeleteClickCount((currState) => {
        return currState + 1;
      });
    });
  }
  return (
    <button className={`${styles.deleteButton}`} onClick={onClickHandler}>
      🗑
    </button>
  );
}

export default DeleteCommentButton;
