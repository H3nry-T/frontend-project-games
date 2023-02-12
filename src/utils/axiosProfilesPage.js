import { ApiRequest } from "./axios";

export const getAllUsers = () => {
  return ApiRequest.get("/users").then(({ data: { users } }) => {
    return users;
  });
};
