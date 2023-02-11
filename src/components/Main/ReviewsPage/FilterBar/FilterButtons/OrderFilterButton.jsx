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
        //IF CLICKING ON THE SAME BUTTON
        if (props.orderQueryParam === props.order) {
          props.setOrderButtonIsPressed(false);
          props.setAddQuery((currQueries) =>
            [...currQueries].filter((query) => !query.startsWith("order"))
          );
        } else {
          //CLICKING ON DIFFERENT BUTTON
          props.setOrderButtonIsPressed(true);

          props.setAddQuery((currQueries) => {
            const existsOrderQuery = currQueries.find((query) =>
              query.startsWith("order")
            );
            let finalisedQueries = [...currQueries];
            //IF ANOTHER ORDER IS SELECTED REMOVE IT FROM URL
            if (existsOrderQuery) {
              finalisedQueries = finalisedQueries.filter(
                (query) => !query.startsWith("order")
              );
            }
            //ELSE NO ORDER IS IN URL AND WE CAN ADD NEW ORDER
            return [...finalisedQueries, `order=${props.order}`];
          });
        }
      }}
    >
      {props.order}
    </button>
  );
}

export default OrderFilterButton;
