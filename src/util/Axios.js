import axios from "axios";


const token = JSON.parse(localStorage.getItem("user"))?.accessToken

const Axios = axios.create({
  baseURL: "http://18.183.45.105/shorts/api",
  headers: {
    Authorization: token ? `Bearer ${token}` : null,
  },
});

export default Axios;
