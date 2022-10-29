import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducres/auth/authSlice";
import adminReducer from '../reducres/auth/adminAuthSlice'
import postReducer from '../reducres/post/postSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        adminAuth: adminReducer,
        post: postReducer
    }
})