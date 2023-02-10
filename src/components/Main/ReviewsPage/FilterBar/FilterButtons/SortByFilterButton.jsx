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
        //IF CLICKING ON THE SAME BUTTON
        if (props.sortByQueryParam === props.sortBy) {
          props.setSortByButtonIsPressed(false);
          props.setAddQuery((currQueries) =>
            [...currQueries].filter((query) => !query.startsWith("sort_by"))
          );
        } else {
          //CLICKING ON DIFFERENT BUTTON
          props.setSortByButtonIsPressed(true);

          props.setAddQuery((currQueries) => {
            const existsSortByQuery = currQueries.find((query) =>
              query.startsWith("sort_by")
            );
            let finalisedQueries = [...currQueries];
            //IF ANOTHER SORTBY IS SELECTED REMOVE IT FROM URL
            if (existsSortByQuery) {
              finalisedQueries = finalisedQueries.filter(
                (query) => !query.startsWith("sort_by")
              );
            }
            //ELSE NO SORTBY IS IN URL AND WE CAN ADD NEW SORTBY
            return [...finalisedQueries, `sort_by=${props.sortBy}`];
          });
        }
      }}
    >
      {props.sortBy === "created_at" ? "date" : props.sortBy}
    </button>
  );
}

export default SortByFilterButton;
