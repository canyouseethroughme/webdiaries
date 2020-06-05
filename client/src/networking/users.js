import axios from "axios";

const url = "/users";
const localhost = "http://localhost:8899";

export const login = async (data) => {
  return axios.post(`${localhost}${url}/login`, data);
};

export const signup = async (data) => {
  return axios.post(`${localhost}${url}/signup`, data);
};

export const forgotPassword = async (data) => {
  return axios.post(`${localhost}${url}/forgot-password`, data);
};

export const updatePassword = async (token, data) => {
  return axios.put(`${localhost}${url}/update-password/${token}`, data);
};

export const deleteAccount = async () => {
  return axios.delete(`${localhost}${url}/delete-account`);
};
