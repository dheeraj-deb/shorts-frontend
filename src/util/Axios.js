import axios from "axios";


const token = JSON.parse(localStorage.getItem("user"))?.accessToken

const Axios = axios.create({
  baseURL: "https://shortsmedium.ml/shorts/api",
  headers: {
    Authorization: token ? `Bearer ${token}` : null,
  },
});

export default Axios;
