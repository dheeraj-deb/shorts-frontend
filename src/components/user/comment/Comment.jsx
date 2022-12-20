import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { likeAndDislike, getComment, postComments, deleteComments, reset } from "../../../services/reducres/post/commentSlice"

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Input, Button } from "@material-tailwind/react";
// import InputEmoji from "react-input-emoji";

import Spinner from "../../Spinner"
import { toast } from "react-toastify";

function Comment({ postId, user }) {

  const dispatch = useDispatch()
  const { comments, isLoading, isSuccess, message, isError } = useSelector(state => state.comment)

  const generateRandomBytes = () => {
    const min = 0;
    const max = 10000;
    return min + Math.random() * (max - min);
  };


  const [comment, addComment] = useState({
    commentId: "",
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

  const getComments = () => {
    dispatch(getComment(postId))
  };


  const handleComment = () => {
    dispatch(postComments({ postId, comment }))
  };

  const handleDelete = (commentId) => {
    dispatch(deleteComments(commentId))
  }


  const handleLike = (commentId) => {
    if (user) {
      dispatch(likeAndDislike({ commentId, userId: user._id }))
    } else {
      console.log("please login");
    }
  }


  useEffect(() => {
    if (isError) {
      toast(message)
    }
    getComments();
    dispatch(reset())
  }, []);




  if (isLoading) {
    <Spinner />;
  }
  return (
    <div className="w-100">
      <div className="h-[100px] overflow-y-scroll">
        {comments?.map((comment) => {
          if (comment.postId === postId) {
            return (
              <div className="py-2 px-5" key={comment.commentId}>
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
                        comment?.likes?.includes(user?._id) ? (<AiFillHeart className="text-red-600" onClick={() => {
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
                          onClick={() => {
                            console.log("commId", comment.commentId)
                            handleDelete(comment.commentId)
                          }}>
                          Delete
                        </button>
                      ) : (null)
                    }
                  </div>
                </div>
              </div>
            );
          }
        })}

        {
          !comments ? (<div className="flex items-center justify-center w-[100%] h-[100%]">
            <h3 className="font-poppins">No Comments Found!</h3>
          </div>) : (null)
        }

      </div>
      <div className=" py-3 px-5">
        <div className="flex">
          <div>{/* <InputEmoji textInputRef={comments} /> */}</div>
          <Input value={comment.text} onChange={(e) => {
            addComment((prev) => {
              return {
                ...prev,
                text: e.target.value,
                commentId: generateRandomBytes()
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