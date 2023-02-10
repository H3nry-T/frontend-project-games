import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../../../utils/axiosAllReviews";
import styles from "./ReviewsPage.module.css";

export default function FilterBar({ allReviews, setAllReviews }) {
  const [allCategoryOptions, setAllCategoryOptions] = useState([]);
  const [allOrderOptions] = useState(["Ascending", "Descending"]);
  const [allSortByOptions, setAllSortByOptions] = useState(["owner"]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryQueryParam = queryParams.get("category");
  const [categoryButtonIsPressed, setCategoryButtonIsPressed] = useState(false);
  //GIVE ALL CATEGORY OPTIONS
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

  //IF CATEGORY BUTTON IS PRESSED CHANGE THE BUTTON CLASS

  return (
    <aside className={styles.reviewFilterAside}>
      <h2 className={styles.highlight}>filter by</h2>
      <h3>category:</h3>
      {allCategoryOptions.map((category) => {
        return (
          <button
            key={category}
            className={`${styles.reviewFilterButton} ${
              categoryButtonIsPressed && category === categoryQueryParam
                ? styles.indentButton
                : ""
            }`}
            onClick={() => {
              if (categoryQueryParam === category) {
                setCategoryButtonIsPressed(false);
                navigate("/");
              } else {
                setCategoryButtonIsPressed(true);
                navigate(`/reviews?category=${category}`);
              }
            }}
          >
            {category}
          </button>
        );
      })}
      <h3>sort_by:</h3>
      {allSortByOptions.map((column) => (
        <button key={column} className={`${styles.reviewFilterButton} `}>
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
