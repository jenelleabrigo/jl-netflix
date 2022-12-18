import axios from "axios";

const authAxios = axios.create({
  baseURL: "https://backend-template-api-express-production.up.railway.app",
});

export default authAxios;
