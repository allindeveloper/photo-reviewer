import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { getBaseUrl } from "../utils/globalUtils";


const AxiosInstance = axios.create({
  baseURL: `${getBaseUrl()}?client=id=${process.env.REACT_APP_UNSPLASH_CLIENT_ID}`,
});
AxiosInstance.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    return config;
  },

  (error: AxiosError) => {
    return Promise.reject(error);
  },
);
export default AxiosInstance;
