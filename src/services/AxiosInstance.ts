import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getBaseUrl } from "../utils/globalUtils";


let AxiosInstance = axios.create({
  baseURL: getBaseUrl(),
});
AxiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.headers["Authorization"] = `Client-ID ${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`
    return config;
  },

  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
export default AxiosInstance;
