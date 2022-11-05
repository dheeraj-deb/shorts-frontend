import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosReq from "../../../util/Axios";


// get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  try {
    const response = await axiosReq.post("/auth/user/signin", user);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message.message)
  }
});

// need to change

export const followAndUnfollow = createAsyncThunk("auth/followUnfollow", async (user, thunkAPI) => {
  try {
    const response = await axiosReq.patch(`/follow_unfollow/${user}`);
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message.message)
  }
})


export const fetcUserData = createAsyncThunk("auth/fetchuser", async (user, thunkAPI) => {
  try {
    const response = await axiosReq.get(`/user/${user}`)
    return response.data;
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data) || error.message || error.toString();
    return thunkAPI.rejectWithValue(message.message)
  }
})

export const logout = createAsyncThunk("auth/logout", async () => {
  await localStorage.removeItem("user");
});


// authSlice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload)
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(followAndUnfollow.fulfilled, (state, { payload }) => {
        if (payload.message === "Followed")
          state.user.following = [...state.user.following, payload.userId];
        else if (payload.message === "UnFollowed")
          state.user.following = state.user.following.filter((user) => {
            return user !== payload.userId
          })
      })
      .addCase(followAndUnfollow.rejected, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(fetcUserData.fulfilled, (state, { payload }) => {
        state.user = payload
      })
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
