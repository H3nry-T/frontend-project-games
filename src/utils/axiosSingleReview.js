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

export const patchReviewByReviewId = (review_id, value) => {
  const patchBody = {
    incVotes: value,
  };
  return ApiRequest.patch(`/reviews/${review_id}`, patchBody).then(
    ({ data }) => {
      // console.log(data);
    }
  );
};

export const patchCommentByReviewId = (comment_id, value) => {
  const patchBody = {
    inc_votes: value,
  };
  ApiRequest.patch(`/comments/${comment_id}`, patchBody).then(
    ({ data: { updatedComment } }) => {
      // console.log("comment vote:", updatedComment.votes);
    }
  );
};

export const postCommentByReviewId = (review_id, username, body) => {
  const postBody = {
    username: username,
    body: body,
  };

  return ApiRequest.post(`/reviews/${review_id}/comments`, postBody).then(
    ({ data }) => {
      return data.postedComment;
    }
  );
};

export const deleteCommentById = (comment_id) => {
  return ApiRequest.delete(`/comments/${comment_id}`);
};
