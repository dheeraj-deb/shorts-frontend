import axios from "axios";

const token = localStorage.getItem("shortsAccess");

const Axios = axios.create({
  baseURL: "http://localhost:4000/shorts/api",
  headers: {
    Authorization: token ? token : null,
  },
});

export default Axios;
