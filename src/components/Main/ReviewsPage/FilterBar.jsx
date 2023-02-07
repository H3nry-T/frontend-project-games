import { useEffect, useState } from "react";
import { getAllCategories } from "../../../utils/axios";
import styles from "./ReviewsPage.module.css";

export default function FilterBar({ allReviews }) {
  const [allCategoryOptions, setAllCategoryOptions] = useState([]);
  const [allOrderOptions] = useState(["Ascending", "Descending"]);
  const [allSortByOptions, setAllSortByOptions] = useState(["owner"]);

  useEffect(() => {
    getAllCategories().then((categoriesFromApi) => {
      setAllCategoryOptions(categoriesFromApi);
    });
  }, []);

  //WAIT UNTIL ALLREVIEWS IS STORED IN STATE BEFORE LOADING COLUMN NAMES
  useEffect(() => {
    const columnNames = Object.keys(allReviews[0]);
    setAllSortByOptions(columnNames);
  }, [allReviews]);

  return (
    <aside className={styles.reviewFilterAside}>
      <h2 className={styles.highlight}>filter by</h2>
      <h3>category:</h3>
      {allCategoryOptions.map((category) => {
        return (
          <button key={category} className={styles.reviewFilterButton}>
            {category}
          </button>
        );
      })}
      <h3>sort_by:</h3>
      {allSortByOptions.map((column) => (
        <button key={column} className={styles.reviewFilterButton}>
          {column}
        </button>
      ))}
      <h3>order:</h3>
      {allOrderOptions.map((orderOption) => (
        <button key={orderOption} className={styles.reviewFilterButton}>
          {orderOption}
        </button>
      ))}
    </aside>
  );
}
