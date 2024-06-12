import axios from "axios";

const api = axios.create({
  baseURL: "https://iot-dashboard-backend-zeta.vercel.app/api",
});

export default api;
