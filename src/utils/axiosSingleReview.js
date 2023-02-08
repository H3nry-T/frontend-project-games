import { ApiRequest } from "./axios";

export const getReviewById = (review_id) => {
  return ApiRequest.get(`/reviews/${review_id}`).then(
    ({ data: { review } }) => {
      return review;
    }
  );
};

export const getCommentsByReviewId = (review_id) => {
  return ApiRequest.get(`/reviews/${review_id}/comments`).then(
    ({ data: { comments } }) => {
      return comments;
    }
  );
};

export const patchCommentsByReviewId = (review_id, value) => {
  const patchBody = {
    incVotes: value,
  };
  return ApiRequest.patch(`/reviews/${review_id}`, patchBody).then(
    ({ data }) => {
      console.log(data);
    }
  );
};
