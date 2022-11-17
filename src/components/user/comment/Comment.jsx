import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { likeAndDislike, getComment, postComments, deleteComments, reset } from "../../../services/reducres/post/commentSlice"

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Input, Button } from "@material-tailwind/react";
// import InputEmoji from "react-input-emoji";

import Spinner from "../../Spinner"

function Comment({ postId, user }) {
  const dispatch = useDispatch()
  const { comments, isLoading, isSuccess, message, isError } = useSelector(state => state.comment)

  const generateRandomBytes = () => {
    const min = 0;
    const max = 10000;
    return min + Math.random() * (max - min);
  };

  const [comment, addComment] = useState({
    commentId: generateRandomBytes(),
    commentedBy: user ? user._id : null,
    username: user ? user.username : null,
    postId,
    text: "",
    likes: [],
    avatarUri: user
      ? user.avatarUri
        ? user.avatarUri
        : "link"
      : null,
    parent: "",
    replies: [],
  })

  const getComments = async () => {
    dispatch(getComment(postId))
  };

  const handleComment = async () => {
    dispatch(postComments({ postId, comment }))
  };

  const handleDelete = async (commentId) => {
    dispatch(deleteComments(commentId))
  }


  const handleLike = async (commentId) => {
    if (user) {
      dispatch(likeAndDislike(commentId))
    } else {
      console.log("please login");
    }
  }


  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    getComments();
    dispatch(reset())
  }, []);




  if (isLoading) {
    <Spinner />;
  }
  return (
    <div className="w-100">
      {comments?.map((comment) => {
        return (
          <div key={comment?.commentId} className="py-2 px-5">
            <div className="mb-4">
              <div className="flex justify-between">
                <div className="flex">
                  {/* profile-pic */}
                  <div className="mr-2 flex items-center">
                    <img
                      className="h-[25px] w-[25px] object-cover rounded-full"
                      src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
                      alt="profile"
                    />
                  </div>
                  <div className="flex items-center">
                    <p className="font-poppins font-semibold text-xs mr-2">
                      {comment?.username}
                    </p>
                    <p className="font-poppins font-medium text-xs text-ellipsis	">
                      {comment?.text}
                    </p>
                  </div>
                </div>
                <div>
                  {
                    comment.likes.includes(user?._id) ? (<AiFillHeart onClick={() => {
                      handleLike(comment.commentId)
                    }} fontSize={14} />) : (<AiOutlineHeart onClick={() => {
                      handleLike(comment.commentId)
                    }} fontSize={14} />)
                  }
                </div>
              </div>
              <div className="flex items-center pl-10">
                <p className="font-poppins font-bold text-xs text-gray-500 mr-2">
                  {comment?.likes.length} Likes
                </p>
                {
                  comment?.commentedBy == user?._id ? (
                    <button
                      className="font-poppins font-bold text-xs text-gray-500"
                      onClick={() => handleDelete(comment.commentId)}>
                      Delete
                    </button>
                  ) : (null)
                }
              </div>
            </div>
          </div>
        );
      })}

      <div className=" py-3 px-5">
        <div className="flex">
          <div>{/* <InputEmoji textInputRef={comments} /> */}</div>
          <Input value={comment?.text} onChange={(e) => {
            addComment((prev) => {
              return {
                ...prev,
                text: e.target.value
              }
            })
          }} />
          <Button className="ml-2" onClick={handleComment}>
            Post
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Comment;