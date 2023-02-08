import { ApiRequest } from "./axios";

export const getReviewById = (review_id) => {
  return ApiRequest.get(`/reviews/${review_id}`)
  .then(
    ({ data: { review } }) => {
      return review;
    }
  );
};

export const getCommentsByReviewId = (review_id) => {
  return ApiRequest.get(`/reviews/${review_id}/comments`)
  .then(({data: {comments}}) => {
    return comments;
  })
}
