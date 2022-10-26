import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducres/auth/authSlice";
import adminReducer from '../reducres/auth/adminAuthSlice'

export const store =configureStore({
    reducer:{
        auth:authReducer,
        adminAuth:adminReducer
    }
})