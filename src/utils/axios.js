import axios from "axios";

export const ApiRequest = axios.create({
  baseURL: "https://nc-games-9h15.onrender.com/api",
});

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
