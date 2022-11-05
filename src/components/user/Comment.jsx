import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CommentSection } from "react-comments-section";
import "react-comments-section/dist/index.css";
import axios from "../../util/Axios";
import Spinner from "../Spinner";

function Comment({ postId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const addComment = async (data) => {
    const response = await axios.post(`/add_comment/${postId}`, data);
  };

  const deleteComment = async (data) => {
    console.log(data);
  };

  const replyComment = async (data) => {
    const res = await axios.patch(`comment/reply/${postId}`, data);
  };

  const getComment = async () => {
    const response = await axios.get(`/comments/${postId}`);
    setComments(response.data.comments);
  };

  useEffect(() => {
    setLoading(true);
    getComment();
    setLoading(false);
  }, []);

  if (loading) {
    <Spinner />;
  }
  return (
    <CommentSection
      currentUser={{
        currentUserId: user?._id,
        currentUserFullName: user?.username,
        currentUserImg: user.profileImg
          ? user.profileImg
          : "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      }}
      commentData={comments}
      logIn={{
        loginLink: "http://localhost:3000/login",
        signupLink: "http://localhost:3000/signup",
      }}
      onSubmitAction={(data) => {
        addComment(data);
      }}
      onDeleteAction={deleteComment}
      onEditAction={(data) => {}}
      onReplyAction={replyComment}
      currentData={(data) => {
        console.log("crr", data);
      }}
    />
  );
}

export default Comment;
