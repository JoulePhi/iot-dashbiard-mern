import axios from "axios";

const api = axios.create({
  baseURL: "http://147.139.201.149:5000/api",
});

export default api;
