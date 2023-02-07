import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviewById } from "../../../utils/axiosSingleReview";
import styles from "./SingleReview.module.css";

const SingleReview = () => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();
  const date = new Date(Date.parse(singleReview.created_at));

  useEffect(() => {
    getReviewById(review_id)
      .then((reviewFromApi) => {
        console.log(reviewFromApi);
        setSingleReview(reviewFromApi);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <article className={styles.singleReview}>
      <section className={`${styles.flexContainer} ${styles.spaceEvenly}`}>
        <div className={styles.flexContainer}>
          <img
            style={{ margin: "0 1rem 0 0" }}
            className={styles.reviewImg}
            src={singleReview.review_img_url}
            draggable="false"
            alt="board game"
          ></img>
          <p>
            <strong>{singleReview.owner}'s</strong> review on{" "}
            <strong>{singleReview.title}</strong>
          </p>
        </div>
        <p>designed by {singleReview.designer}</p>
        <p>{singleReview.category} game</p>
        <div>
          <p>created at {date.toLocaleDateString()}</p>
        </div>
      </section>
      <hr></hr>
      <section>
        <div style={{ textAlign: "left" }}>
          <p>{singleReview.review_body}</p>
        </div>
        <div
          className={`${styles.flexContainer} ${styles.justifyContentCenter}`}
        >
          <p className={styles.pSpacing}>{singleReview.votes} votes</p>
          <p className={styles.pSpacing}>
            {singleReview.comment_count} comments
          </p>
        </div>
      </section>
    </article>
  );
};

export default SingleReview;
