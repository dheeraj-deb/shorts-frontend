import React, { useEffect } from "react";

import { reset, getPosts } from "../../services/reducres/post/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Post from "./Post";

function Posts() {
  const dispatch = useDispatch();
  const { post, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.post
  );
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  useEffect(() => {
    if (isError) {
      toast(message);
      dispatch(reset());
    }

    if (isSuccess) {
      dispatch(reset());
    }
  }, [isLoading, isSuccess, message, isError]);


  return (
    <>
      {post?.map((val) => {
        console.log(val);
        return (
          <Post
            post={val}
            isLoading={isLoading}
            userId={user?._id}
            key={val._id}
          />
        );
      })}
    </>
  );
}

export default Posts;
