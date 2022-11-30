import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducres/user/authSlice";
import adminReducer from "../reducres/admin/adminAuthSlice"
import postReducer from "../reducres/post/postSlice"
import commentReducer from "../reducres/post/commentSlice"

import userSlice from "../reducres/user/userSlice"

export const store = configureStore({
  reducer: {
    auth: authSlice,
    adminAuth: adminReducer,
    post: postReducer,
    comment: commentReducer,
    user: userSlice
  }
})