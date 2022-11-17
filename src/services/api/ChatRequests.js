import Axios from "../../util/Axios"

export const createChat = (data) => Axios.post('/chat/', data);

export const userChats = (id) => Axios.get(`/chat/${id}`);

export const findChat = (firstId, secondId) => Axios.get(`/chat/find/${firstId}/${secondId}`);