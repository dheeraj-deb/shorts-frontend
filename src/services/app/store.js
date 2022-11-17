import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducres/user/UserSlice";
import adminReducer from "../reducres/admin/adminAuthSlice"
import postReducer from "../reducres/post/postSlice"
import commentReducer from "../reducres/post/commentSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    adminAuth: adminReducer,
    post: postReducer,
    comment: commentReducer
  }
})