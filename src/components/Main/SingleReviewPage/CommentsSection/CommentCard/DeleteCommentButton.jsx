import React from "react";
import styles from "../../SingleReviewPage.module.css";

function DeleteCommentButton() {
  //ON CLICK delete the comment by comment id
  function onClickHandler() {}
  return <button className={`${styles.deleteButton}`}>🗑</button>;
}

export default DeleteCommentButton;
