import axios from "axios";

const axiosSettings = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BACKEND_API || "https://xpnetwork-widget.herokuapp.com/",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getMethod = async (url: string) => {
  const response = await axiosSettings().get(url);
  return response;
};

export const postMethod = async (url: string, object: any) => {
  const response = await axiosSettings().post(url, object);
  return response.data;
};

export const deleteMethod = async (url: string) => {
  const response = await axiosSettings().delete(url);
  return response.data;
};

export const putMethod = async (url: string, object: any) => {
  const response = await axiosSettings().put(url, object);
  return response.data;
};
