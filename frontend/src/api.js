import axios from "axios";

const api = axios.create({
  baseURL: "https://iot-dashbiard-mern-production.up.railway.app/api",
});

export default api;
