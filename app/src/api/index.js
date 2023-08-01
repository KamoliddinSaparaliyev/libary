import axios from "axios";
const inastance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
export default inastance;
