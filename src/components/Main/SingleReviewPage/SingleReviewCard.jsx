import React from "react";
import styles from "./SingleReviewPage.module.css";

const SingleReviewCard = ({singleReview, date}) => {
    return (
    <section className={styles.singleReview}>
        <article className={`${styles.flexContainer} ${styles.spaceEvenly}`}>
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
        </article>
        <hr></hr>
        <article>
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
        </article>
      </section>
      
      )
}

export default SingleReviewCard;