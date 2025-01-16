import axios from "axios";

import qs from "qs";
import { API_URL } from "../config";
const apiUrl = API_URL;

const instance = axios.create({
  baseURL: `${apiUrl}`,
  paramsSerializer(params) {
    return qs.stringify(params, { indices: false });
  },
});

instance.interceptors.request.use(
  (config) => {
    config.headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    } else {
      return Promise.reject({ message: 400 });
    }
  },
  (error) => Promise.reject(error)
);

const http = instance;

export default http;
