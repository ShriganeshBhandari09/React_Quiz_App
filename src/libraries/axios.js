import axios from "axios";

import qs from "qs";
import { API_URL } from "../config";
import { toast } from "react-toastify";
const apiUrl = API_URL;

const instance = axios.create({
  baseURL: `${apiUrl}`,
  paramsSerializer(params) {
    return qs.stringify(params, { indices: false });
  },
});

instance.interceptors.request.use(
  (config) => {
    // config.headers = {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    // };
    return config;
  },
  (error) => Promise.reject(toast.error(error.message))
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
    if (response.status === 201) {
      return response;
    } else {
      return Promise.reject(toast.error("Data Fetching Failed"));
    }
  },
  (error) => Promise.reject(toast.error(error.message))
);

const http = instance;

export default http;
