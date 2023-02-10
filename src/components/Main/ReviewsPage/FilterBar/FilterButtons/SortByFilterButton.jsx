import React from "react";
import styles from "../../ReviewsPage.module.css";

function SortByFilterButton(props) {
  return (
    <button
      className={`${styles.reviewFilterButton} ${
        props.sortByButtonIsPressed && props.sortBy === props.sortByQueryParam
          ? styles.indentButton
          : ""
      }`}
      onClick={() => {
        if (props.sortByQueryParam === props.sortBy) {
          props.setSortByButtonIsPressed(false);
          props.setAddQuery("");
        } else {
          props.setSortByButtonIsPressed(true);
          props.setAddQuery(`reviews?sort_by=${props.sortBy}`);
        }
      }}
    >
      {props.sortBy}
    </button>
  );
}

export default SortByFilterButton;
