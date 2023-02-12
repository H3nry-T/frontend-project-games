import { ApiRequest } from "./axios";

export const getAllReviews = () => {
  return ApiRequest.get("/reviews").then((response) => {
    return response.data.reviews;
  });
};

export const getAllCategories = () => {
  return ApiRequest.get("/categories").then(({ data: { categories } }) => {
    return categories.map((categoryObj) => categoryObj.slug); //["strategy", "hidden-roles", "dexterity", "push-your-luck", "roll-and-write", "deck-building", "engine-building"]
  });
};

export const getReviewsByParams = (category, sort_by, order) => {
  return ApiRequest.get(`/reviews`, {
    params: {
      category: category,
      sort_by: sort_by,
      order: order,
    },
  }).then(({ data: { reviews } }) => {
    return reviews;
  });
  // .catch((error) => console.log(error));
};
