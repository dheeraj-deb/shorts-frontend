import React, { useEffect, useState } from "react";

import { reset, getPosts, searchPosts } from "../../../services/reducres/post/postSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Post from "./Post";
import { getUser } from "../../../services/api/UserRequestes";
import { clearUser } from "../../../services/reducres/user/userSlice";

function Posts() {
  const dispatch = useDispatch();
  const [userDetails, setUserDetails] = useState({})
  const [saved, setSaved] = useState(false)
  const { post, filteredPosts, isLoading, isSuccess, message, isError } = useSelector(
    (state) => state.post
  );
  const { user } = useSelector((state) => state.auth);

  const fetchUserData = async () => {
    const { data } = await getUser(user?._id)
    setUserDetails(data)
  }

  useEffect(() => {
    return (() => {
      dispatch(clearUser())
    })
  }, [])

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
      {/* filteredPost.map */}
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
