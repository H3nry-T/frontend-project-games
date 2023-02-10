import React from "react";
import styles from "../../ReviewsPage.module.css";

function OrderFilterButton(props) {
  return (
    <button
      className={`${styles.reviewFilterButton} ${
        props.orderButtonIsPressed && props.order === props.orderQueryParam
          ? styles.indentButton
          : ""
      }`}
      onClick={() => {
        if (props.orderQueryParam === props.order) {
          props.setOrderButtonIsPressed(false);
          props.setAddQuery("");
        } else {
          props.setOrderButtonIsPressed(true);
          props.setAddQuery(`reviews?order=${props.order}`);
        }
      }}
    >
      {props.order}
    </button>
  );
}

export default OrderFilterButton;
