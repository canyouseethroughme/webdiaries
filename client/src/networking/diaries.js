import axios from "axios";

const url = "/diaries";

export const createDiary = async (data) => {
  return axios.post(`${url}/create-diary`, data);
};

export const getDiaries = async (data) => {
  return axios.get(`${url}/`, data);
};

export const getFavoriteDiaries = async (data) => {
  return axios.get(`${url}/favorite-diaries`, data);
};

export const getOneDiary = async (diaryID) => {
  return axios.get(`${url}/${diaryID}`);
};

export const updateDiary = async (diaryID, data) => {
  return axios.put(`${url}/update-diary/${diaryID}`, data);
};

export const deleteDiary = async (diaryID) => {
  return axios.delete(`${url}/delete-diary/${diaryID}`);
};
