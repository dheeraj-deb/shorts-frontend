import Axios from "../../util/Axios"

export const getSuggestedUsers = () => Axios.get("/user/suggest")

export const getComments = (id) => Axios.get(`/comments/${id}`)

export const postComment = (id, comments) => Axios.post(`/add_comment/${id}`, { comments })

export const deleteComment = (id) => Axios.delete(`/comment/${id}`)

export const handleLikeAndDislike = (id) => Axios.patch(`/comment/like/${id}`)

export const getUser = (id) => Axios.get(`/user/${id}`)

export const editPost = (id, data) => Axios.patch(`/edit/${id}`, data)

export const findPostById = (id) => Axios.get(`/post/${id}`)

export const savePost = (id) => Axios.post(`/save/${id}`)

export const getSavedPosts = (id) => Axios.get('/saved-post')

