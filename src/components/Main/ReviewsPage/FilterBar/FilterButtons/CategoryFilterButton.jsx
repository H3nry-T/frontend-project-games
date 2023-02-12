import React from "react";
import styles from "../FilterBar.module.css";

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
        //IF CLICKING ON THE SAME BUTTON
        if (props.categoryQueryParam === props.category) {
          props.setCategoryButtonIsPressed(false);
          props.setAddQuery((currQueries) =>
            [...currQueries].filter((query) => !query.startsWith("category"))
          );
        } else {
          //CLICKING ON DIFFERENT BUTTON
          props.setCategoryButtonIsPressed(true);

          props.setAddQuery((currQueries) => {
            const existsCategoryQuery = currQueries.find((query) =>
              query.startsWith("category")
            );
            let finalisedQueries = [...currQueries];
            //IF ANOTHER CATEGORY IS SELECTED REMOVE IT FROM URL
            if (existsCategoryQuery) {
              finalisedQueries = finalisedQueries.filter(
                (query) => !query.startsWith("category")
              );
            }
            //ELSE NO CATEGORY IS IN URL AND WE CAN ADD NEW CATEGORY
            return [...finalisedQueries, `category=${props.category}`];
          });
        }
      }}
    >
      {props.category}
    </button>
  );
}

export default CategoryFilterButton;
