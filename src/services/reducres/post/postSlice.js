import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosReq from "../../../util/Axios";

const initialState = {
  post: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

const config = {
  headers: {
    "Content-Type": "multipart/form-data",
  },
};

export const createPost = createAsyncThunk(
  "post/create",
  async (data, thunkAPI) => {
    console.log(data)
    try {
      const response = await axiosReq.post("/upload", data, config);
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

export const getPosts = createAsyncThunk(
  "post/getpost",
  async (data, thunkAPI) => {
    try {
      const response = await axiosReq.get("/getposts");
      if (response.status === 204) {
        return thunkAPI.rejectWithValue("No posts found!");
      }
      return response.data.posts;
    } catch (error) {
      const message =
                (error.response && error.response.data && error.response.data) ||
                error.message ||
                error.toString();
      return thunkAPI.rejectWithValue(error);
    }
  }
);


export const deletePost = createAsyncThunk("post/deletepost", async (postId, thunkAPI) => {
  try {
    const response = await axiosReq.delete(`/${postId}`)
    return response.data
  } catch (error) {
    const message =
            (error.response && error.response.data && error.response.data) ||
            error.message ||
            error.toString();
    return thunkAPI.rejectWithValue(error);
  }
})



export const likeAndDislike = createAsyncThunk(
  "post/likeAndDislike",
  async (data, thunkAPI) => {
    try {
      const response = await axiosReq.patch(`/like/${data.postId}`, {
        _id: data.userId,
      });

      return response.data;
    } catch (error) {
      const message =
                (error.response && error.response.data && error.response.data) ||
                error.message ||
                error.toString();
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      })
      .addCase(createPost.fulfilled, (state, { payload }) => {
        console.log(payload)
        state.isLoading = false;
        state.post = [...state.post, payload.response];
        state.isSuccess = true;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.post = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.post = null;
        state.message = action.payload;
      })
      .addCase(likeAndDislike.fulfilled, (state, action) => {
        state.post.map((elem) => {
          if (action.payload.message == "Liked") {
            if (elem._id == action.payload.postId) {
              if (!elem.likes.includes(action.payload.userId)) {
                elem.likes = [...elem.likes, action.payload.userId];
              }
            }
          } else {
            if (elem._id == action.payload.postId) {
              if (elem.likes.includes(action.payload.userId)) {
                elem.likes = elem.likes.filter((id) => {
                  return id != action.payload.userId;
                });
              }
            }
          }
        });
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.isSuccess = true;
        state.post = state.post.filter((elem) => {
          return elem._id !== action.payload.postId
        })
      })
  },
});

export const { reset } = postSlice.actions;
export default postSlice.reducer;
