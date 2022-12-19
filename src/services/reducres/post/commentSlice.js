import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { handleLikeAndDislike, getComments, postComment, deleteComment } from "../../api/UserRequestes";

const initialState = {
  comments: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: null,
};


export const getComment = createAsyncThunk("comment/get", async (postId, thunkAPI) => {
  try {
    const response = await getComments(postId);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})

export const postComments = createAsyncThunk("comment/post", async ({ postId, comment }, thunkAPI) => {
  console.log(postId, comment);
  try {
    const response = await postComment(postId, comment);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})


export const deleteComments = createAsyncThunk("comment/delete", async (commentId, thunkAPI) => {
  console.log("thunk commentId", commentId)
  try {
    const response = await deleteComment(commentId);
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
})


export const likeAndDislike = createAsyncThunk(
  "comment/likeAndDislike",
  async (data, thunkAPI) => {
    try {
      const response = await handleLikeAndDislike(data.commentId);
      return response.data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isSuccess = false),
        (state.isLoading = false),
        (state.isError = false),
        (state.message = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getComment.fulfilled, (state, { payload }) => {
        state.isLoading = false
        state.isSuccess = true
        state.comments = payload.comments
      })
      .addCase(getComment.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.post = null;
        state.message = action.payload;
      })
      .addCase(postComments.pending, (state, { payload }) => {
        state.isLoading = true
      })
      .addCase(postComments.fulfilled, (state, { payload }) => {
        if (state?.comments?.length) {
          state.comments = [...state.comments, payload.comment]
        } else {
          state.comments = [payload.comment]
        }
      })
      .addCase(postComments.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(likeAndDislike.pending, (state, action) => {
        // console.log("action", action);
      })
      .addCase(likeAndDislike.fulfilled, (state, action) => {
        state.comments.map((elem) => {
          if (elem.commentId == action.payload.commentId) {
            if (!elem.likes.includes(action.payload.userId)) {
              elem.likes = [...elem.likes, action.payload.userId];
            } else {
              elem.likes = elem.likes.filter((id) => {
                return id != action.payload.userId;
              });
            }
          }
        });
      })
      .addCase(likeAndDislike.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(deleteComments.fulfilled, (state, { payload }) => {
        state.comments = [...state.comments.filter((comment) => {
          return comment.commentId !== payload.response.commentId
        })]
      })
  },
});

export const { reset } = commentSlice.actions;
export default commentSlice.reducer;
