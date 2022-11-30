import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosReq from "../../../util/Axios";
import { getUser } from "../../api/UserRequestes";


const initialState = {
    user: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

const config = {
    headers: {
        "Content-Type": "multipart/form-data",
    },
};

// handle following and unFollowing
export const followAndUnFollow = createAsyncThunk("user/followUnfollow", async (user, thunkAPI) => {
    try {
        const response = await axiosReq.patch(`/follow_unfollow/${user}`);
        return response.data;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message.message)
    }
})


export const fetchUser = createAsyncThunk("user/get-user", async (userId, thunkAPI) => {
    try {
        const response = await getUser(userId)
        return response.data;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message.message)
    }
})


export const editProfile = createAsyncThunk("user/edit-profile", async (data, thunkAPI) => {
    try {
        const response = await axiosReq.post("/user/edit", data, config);
        return response.data;
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message.message)
    }
})


// userSlice
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = false;
            state.message = "";
        },
        removePostFromUser: (state, { payload }) => {
            console.log("payload", payload);
            state.posts = state.posts.filter((postId) => {
                return postId !== payload
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(followAndUnFollow.fulfilled, (state, { payload }) => {
                if (payload.message === "Followed")
                    state.user.following = [...state.user.following, payload.userId];
                else if (payload.message === "UnFollowed")
                    state.user.following = state.user.following.filter((user) => {
                        return user !== payload.userId
                    })
            })
            .addCase(fetchUser.fulfilled, (state, { payload }) => {
                state.user = payload
            })
            .addCase(editProfile.pending, (state, { payload }) => {
                state.isLoading = true
            })
            .addCase(editProfile.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = payload
            })
            .addCase(editProfile.rejected, (state, { payload }) => {
                state.isError = true
                state.message = payload
                console.log(payload);
            })
    },
});

export const { reset, removePostFromUser } = userSlice.actions;
export default userSlice.reducer;