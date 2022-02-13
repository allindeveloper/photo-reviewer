import { api } from "constants/apiConstants";
import Axios from "./AxiosInstance";
;

export const getRandomImageApiService = () => {
  return Axios.get(`${api.PHOTOS}/${api.RANDOM}`);
};