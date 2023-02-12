import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import { getReviewById } from "../../../utils/axiosSingleReview";
import CommentsSection from "./CommentsSection/CommentsSection";
import SingleReviewCard from "./SingleReviewCard/SingleReviewCard";

const SingleReviewPage = () => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();
  const date = new Date(Date.parse(singleReview.created_at));
  const { setGlobalError, userIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    getReviewById(review_id)
      .then((reviewFromApi) => {
        setSingleReview(reviewFromApi);
      })
      .catch((err) => {
        console.error(err.response.data.error);
        setGlobalError(err.response.data.error);
        navigate("/error");
      });
  }, [review_id]);

  if (!userIsLoggedIn) {
    return <h1>Log in to view this page!</h1>;
  }

  return (
    <>
      <SingleReviewCard singleReview={singleReview} date={date} />
      <CommentsSection review_id={review_id} singleReview={singleReview} />
    </>
  );
};

export default SingleReviewPage;
