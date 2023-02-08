import React, { useEffect, useState } from 'react'
import { getCommentsByReviewId } from '../../../utils/axiosSingleReview';
import styles from "./SingleReviewPage.module.css";


const CommentsSection = ({review_id}) => {
  const [commentsByReviewId, setCommentsByReviewId] = useState([]); 
  useEffect(() => {
    getCommentsByReviewId(review_id).then((commentsFromApi) =>{
      console.log(commentsFromApi);
      setCommentsByReviewId(commentsFromApi); 
    })
  }, [])
  return (
    <section className={styles.commentsSection}>
      <div>

      {commentsByReviewId.map((commentObj) => {
        return (
        <article key={commentObj.comment_id}>
          <p>
            {commentObj.author}'s comment
          </p>
          <p>
            {commentObj.body}
          </p>
          <p>
            {commentObj.created_at}
          </p>
          <p className={styles.pSpacing}>
<button>-</button>
            <span>{commentObj.votes}</span>
            <button>+</button>
          </p>
        </article>
      )})}
      </div>
    </section>
  )
}

export default CommentsSection