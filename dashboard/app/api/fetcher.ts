import axios from 'axios';
import { apiUrl } from "~/utils/constant";

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export default api;
