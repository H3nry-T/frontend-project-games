import { ApiRequest } from "./axios";

export const getReviewById = (review_id) => {
  return ApiRequest.get(`/reviews/${review_id}`).then(
    ({ data: { review } }) => {
      return review;
    }
  );
};
