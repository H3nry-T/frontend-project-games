import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../../../../utils/axiosAllReviews";
import styles from "../ReviewsPage.module.css";

export default function FilterBar({ allReviews, setAllReviews }) {
  const [allCategoryOptions, setAllCategoryOptions] = useState([]);
  const [allOrderOptions] = useState(["Ascending", "Descending"]);
  const [allSortByOptions, setAllSortByOptions] = useState(["owner"]);

  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const categoryQueryParam = queryParams.get("category");
  const [categoryButtonIsPressed, setCategoryButtonIsPressed] = useState(false);

  const sortByQueryParam = queryParams.get("sort_by");
  const [sortByButtonIsPressed, setSortByButtonIsPressed] = useState(false);

  const orderQueryParam = queryParams.get("order");
  const [orderButtonIsPressed, setOrderButtonIsPressed] = useState(false);
  const [url, setUrl] = useState("/");
  const [addQuery, setAddQuery] = useState("");

  //GIVE ALL CATEGORY OPTIONS
  useEffect(() => {
    getAllCategories().then((categoriesFromApi) => {
      setAllCategoryOptions(categoriesFromApi);
    });
  }, []);

  //WAIT UNTIL ALL REVIEWS IS STORED IN STATE BEFORE LOADING sort_by COLUMN NAMES
  useEffect(() => {
    const columnNames = Object.keys(allReviews[0]);
    setAllSortByOptions(columnNames);
  }, [allReviews]);

  //IF BUTTON PRESSED NAVIGATE
  useEffect(() => {
    const endpoint = url + addQuery;
    navigate(url + addQuery);
  }, [addQuery, url, navigate]);

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
                setAddQuery("");
              } else {
                setCategoryButtonIsPressed(true);
                setAddQuery(`reviews?category=${category}`);
              }
            }}
          >
            {category}
          </button>
        );
      })}
      <h3>sort_by:</h3>
      {allSortByOptions.map((sortBy) => (
        <button
          key={sortBy}
          className={`${styles.reviewFilterButton} ${
            sortByButtonIsPressed && sortBy === sortByQueryParam
              ? styles.indentButton
              : ""
          }`}
          onClick={() => {
            if (sortByQueryParam === sortBy) {
              setSortByButtonIsPressed(false);
              setAddQuery("");
            } else {
              setSortByButtonIsPressed(true);
              setAddQuery(`reviews?sort_by=${sortBy}`);
            }
          }}
        >
          {sortBy}
        </button>
      ))}
      <h3>order:</h3>
      {allOrderOptions.map((orderOption) => {
        const order =
          orderOption === "Ascending"
            ? "ASC"
            : orderOption === "Descending"
            ? "DESC"
            : "ASC";

        return (
          <button
            key={order}
            className={`${styles.reviewFilterButton} ${
              orderButtonIsPressed && order === orderQueryParam
                ? styles.indentButton
                : ""
            }`}
            onClick={() => {
              if (orderQueryParam === order) {
                setOrderButtonIsPressed(false);
                setAddQuery("");
              } else {
                setOrderButtonIsPressed(true);
                setAddQuery(`reviews?order=${order}`);
              }
            }}
          >
            {order}
          </button>
        );
      })}
    </aside>
  );
}
