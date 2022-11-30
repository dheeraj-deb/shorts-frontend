import React, { useEffect, useState } from "react";

import { reset, getPosts } from "../../../services/reducres/post/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Post from "./Post";
import { getUser } from "../../../services/api/UserRequestes";

function Posts() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({})
  const [saved, setSaved] = useState(false)
  const { post, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.post
  );
  const { user } = useSelector((state) => state.auth);

  const fetchUserData = async () => {
    const { data } = await getUser(user?._id)
    setUserDetails(data)
  }

  useEffect(() => {
    fetchUserData()
    dispatch(getPosts());
  }, [saved]);

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
            user={userDetails}
            key={val._id}
            setSaved={setSaved}
          />
        );
      })}
    </>
  );
}

export default Posts;
