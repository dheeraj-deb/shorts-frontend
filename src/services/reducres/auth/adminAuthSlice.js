import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AxiosReq from "../../../util/Axios";

const admin = localStorage.getItem("admin");

const initialState = {
    admin: admin ? admin : null,
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
};

export const adminLogin = createAsyncThunk(
    "auth/adminLogin",
    async (data, thunkAPI) => {
        try {
            const response = await AxiosReq.post("auth/admin/signin", data);
            if (response?.data) {
                localStorage.setItem("admin", JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            const message =
                (error.response && error.response.data && error.response.data) ||
                error.message ||
                error.toString();
            return thunkAPI.rejectWithValue(message.message);
        }
    }
);

export const adminLogout = createAsyncThunk("auth/adminLogout", async () => {
    await localStorage.removeItem("admin")
})

const adminAuthSlice = createSlice({
    name: "adminAuth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isSuccess = false;
            state.isError = false;
            state.isLoading = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLogin.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(adminLogin.fulfilled, (state, action) => {
                state.isSuccess = true
                state.isLoading = false
                state.admin = action.payload
            })
            .addCase(adminLogin.rejected, (state, action) => {
                state.admin = null
                state.isError = true
                state.isLoading = false
                state.message = action.payload
            })
            .addCase(adminLogout.fulfilled, (state) => {
                state.admin = null
            })
    }
});

export const { reset } = adminAuthSlice.actions
export default adminAuthSlice.reducer