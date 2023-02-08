import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../../utils/axiosSingleReview";
import CommentsSection from "./CommentsSection";
import SingleReviewCard from "./SingleReviewCard";


const SingleReviewPage = () => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();
  const date = new Date(Date.parse(singleReview.created_at));
  
  useEffect(() => {
    getReviewById(review_id)
      .then((reviewFromApi) => {
        setSingleReview(reviewFromApi);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
    <SingleReviewCard singleReview={singleReview} date={date}/>
    <CommentsSection review_id={review_id}/>
    </>
  );
};

export default SingleReviewPage;
