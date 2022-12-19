import axios from "axios";
import { DEFAULT_API } from "../config"

const token = JSON.parse(localStorage.getItem("user"))?.accessToken

const Axios = axios.create({
  baseURL: DEFAULT_API,
  headers: {
    Authorization: token ? `Bearer ${token}` : null,
  },
});

export default Axios;
