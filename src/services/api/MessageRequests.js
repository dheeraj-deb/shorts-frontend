import Axios from "../../util/Axios"

export const getMessages = (id) => Axios.get(`/message/${id}`);

export const addMessage = (data) => Axios.post('/message/', data);