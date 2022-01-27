import { axiosInstance } from "./api";

export const signupRequest = async ({ data }) => {
  return await axiosInstance
    .post("/api/users", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};

export const loginRequest = async ({ data }) => {
  return await axiosInstance
    .post("/api/sessions", data)
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return err;
    });
};