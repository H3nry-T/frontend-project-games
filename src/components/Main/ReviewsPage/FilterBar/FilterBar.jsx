import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAllCategories } from "../../../../utils/axiosAllReviews";
import styles from "../ReviewsPage.module.css";
import CategoryFilterButton from "./FilterButtons/CategoryFilterButton";
import OrderFilterButton from "./FilterButtons/OrderFilterButton";
import SortByFilterButton from "./FilterButtons/SortByFilterButton";

export default function FilterBar({ allReviews, setAllReviews }) {
  const [allCategoryOptions, setAllCategoryOptions] = useState([]);
  const [allOrderOptions] = useState(["ASC", "DESC"]);
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
  const url = "/";
  const [addQuery, setAddQuery] = useState([]);

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

  //IF BUTTON PRESSED CHANGE URL
  useEffect(() => {
    const combinedQuery = addQuery.join("&");
    const endpoint = url + "reviews?" + combinedQuery;
    navigate(endpoint);
  }, [addQuery, url, navigate]);

  return (
    <aside className={styles.reviewFilterAside}>
      <h2 className={styles.highlight}>filter by</h2>
      <h3>category:</h3>
      {allCategoryOptions.map((category) => {
        return (
          <CategoryFilterButton
            key={category}
            categoryQueryParam={categoryQueryParam}
            categoryButtonIsPressed={categoryButtonIsPressed}
            setCategoryButtonIsPressed={setCategoryButtonIsPressed}
            setAddQuery={setAddQuery}
            category={category}
          ></CategoryFilterButton>
        );
      })}
      <h3>sort_by:</h3>
      {allSortByOptions
        .filter(
          (sortBy) =>
            sortBy === "votes" ||
            sortBy === "comment_count" ||
            sortBy === "created_at"
        )
        .map((sortBy) => (
          <SortByFilterButton
            key={sortBy}
            sortByQueryParam={sortByQueryParam}
            sortByButtonIsPressed={sortByButtonIsPressed}
            setSortByButtonIsPressed={setSortByButtonIsPressed}
            setAddQuery={setAddQuery}
            sortBy={sortBy}
          ></SortByFilterButton>
        ))}
      <h3>order:</h3>
      {allOrderOptions.map((order) => (
        <OrderFilterButton
          key={order}
          order={order}
          orderQueryParam={orderQueryParam}
          orderButtonIsPressed={orderButtonIsPressed}
          setOrderButtonIsPressed={setOrderButtonIsPressed}
          setAddQuery={setAddQuery}
        ></OrderFilterButton>
      ))}
    </aside>
  );
}
