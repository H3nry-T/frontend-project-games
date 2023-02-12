import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { getReviewsByParams } from "../../../utils/axiosAllReviews";
import Error from "../Error/Error";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewsPage.module.css";

const AllReviews = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category");
  const selectedSortBy = queryParams.get("sort_by");
  const selectedOrder = queryParams.get("order");
  const [allReviewsByQueryParams, setAllReviewsByQueryParams] = useState([]);
  const [loading, setLoading] = useState(true);

  const { userIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const { globalError, setGlobalError } = useContext(UserContext);

  useEffect(() => {
    getReviewsByParams(selectedCategory, selectedSortBy, selectedOrder)
      .then((allReviewsByQueryParamsFromApi) => {
        setAllReviewsByQueryParams(allReviewsByQueryParamsFromApi);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
        setGlobalError(error.response.data.error);
        navigate("/error");
      });
  }, [selectedCategory, selectedSortBy, selectedOrder]);

  if (loading) {
    return (
      <h1 className={`${styles.reviewListAside} ${styles.alignItemsCenter}`}>
        Loading...
      </h1>
    );
  }

  if (Object.keys(globalError).length > 0) {
    return <Error />;
  }

  if (!userIsLoggedIn) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <h1>Please log in to access this page</h1>
      </div>
    );
  }

  return (
    <aside className={styles.reviewListAside}>
      {allReviewsByQueryParams.map((reviewObj) => {
        return (
          <ReviewCard
            key={reviewObj.review_id}
            reviewObj={reviewObj}
          ></ReviewCard>
        );
      })}
    </aside>
  );
};

export default AllReviews;
