import React from "react";
import styles from "../../ReviewsPage.module.css";

function CategoryFilterButton(props) {
  return (
    <button
      className={`${styles.reviewFilterButton} ${
        props.categoryButtonIsPressed &&
        props.category === props.categoryQueryParam
          ? styles.indentButton
          : ""
      }`}
      onClick={() => {
        if (props.categoryQueryParam === props.category) {
          props.setCategoryButtonIsPressed(false);
          props.setAddQuery("");
        } else {
          props.setCategoryButtonIsPressed(true);
          props.setAddQuery(`reviews?category=${props.category}`);
        }
      }}
    >
      {props.category}
    </button>
  );
}

export default CategoryFilterButton;
