import React, { useEffect, useState, useRef, Suspense } from "react";
import { useDispatch } from "react-redux";
import { format } from "timeago.js";
import { DEFAULT_PROFILE, STREAM_API, PROFILE_API } from "../../../config"

import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import Spinner from "../../Spinner";
import { toast } from "react-toastify";

import UseIntersectionObserver from "../../../IntersectionObserver";
import { likeAndDislike, deletePost } from "../../../services/reducres/post/postSlice";

import DropDown from "../../DropDown";
import { savePost } from "../../../services/api/UserRequestes";


const CommentSection = React.lazy(() => import("../comment/Comment"))

function Post({ post, isLoading, user, setSaved }) {
  const dispatch = useDispatch();
  const [isCommentOn, setIsCommentOn] = useState(false);
  const videoRef = useRef(null);
  const [play, setPlay] = useState(true)
  const [ref, entry] = UseIntersectionObserver({ threshold: 0.8 });

  const options = [
    {
      name: "Delete",
      fn: (postId) => {
        dispatch(deletePost(postId))
        setShowVideo(false)
      },
      id: 0,
    }

  ];

  const options1 = [
    {
      name: `${user?.savedPost?.includes(post._id) ? "Save" : "Remove"}`,
      fn: (id) => {
        savePost(id)
        setSaved((prev) => {
          return !prev
        })
      },
      id: 0,
    },
    // {
    //   name: "Report",
    //   fn: () => {
    //     console.log("here");
    //   },
    //   id: 1,
    // },
  ]


  const handlePlayPause = () => {
    setPlay((prev) => !prev)
    console.log(play);
  }


  useEffect(() => {
    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }, [play])

  if (videoRef.current) {
    if (entry.isIntersecting) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  function handleLike() {
    if (user) {
      dispatch(likeAndDislike({ postId: post._id, userId: user._id }));
    } else {
      toast("Please Login!");
    }
  }

  if (isLoading) {
    return (
      <div className="w-100 h-[100vh] flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  // console.log(post)

  return (
    <div className="w-100 h[100vh] mb-4 border  bg-white">
      {/* post header */}
      <section className="w-100 flex items-center justify-between p-2">
        <div className="flex items-center">
          <div className="w-[45px] h-[45px] mr-2">
            <img
              className="w-[100%] h-[100%] relative object-cover rounded-full"
              src={post.user[0].profileUri ? `${PROFILE_API}${post.user[0].profileUri}` : DEFAULT_PROFILE}
              alt=""
            />
          </div>
          <h4>{post?.user ? post.user[0]?.username : ""}</h4>
        </div>
        {user ? <DropDown options={(post?.postedBy == user?._id) ? options : options1} postId={post?._id} /> : null}
      </section>
      <section className="h-[200px] md:h-[300px]" ref={ref}>
        <video
          className="w-[100%] h-[100%] object-cover "
          src={`${STREAM_API}${post?._id}`}
          type="video/mp4"
          loop={true}
          ref={videoRef}
          onClick={handlePlayPause}
          onLoad
        />
      </section>
      <section className="w-100  px-2">
        <h3>{post.title}</h3>
        <p className="text-xs">{post.description}</p>
      </section>
      <section className="w-100  p-2 py-3">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            {post.likes.includes(user?._id) ? (
              <AiFillHeart
                fontSize={22}
                onClick={handleLike}
                className="mr-3 text-red-600"
              />
            ) : (
              <AiOutlineHeart
                fontSize={22}
                onClick={handleLike}
                className="mr-3"
              />
            )}
            <FaRegComment
              fontSize={22}
              onClick={() => setIsCommentOn(isCommentOn ? false : true)}
            />
          </div>
          {/* <FiShare2 fontSize={22} className="self-start mr-2" /> */}
        </div>
        <div className="w-100 px-2">
          <p className="text-sm text-left">{post.likes.length}</p>
        </div>
        <div>
          <p className="font-poppins text-xs font-thin mr-2">
            {format(post.time)}
          </p>
        </div>
      </section>
      {isCommentOn ? <Suspense fallback={<div>Loading....</div>}>
        <CommentSection postId={post._id} user={user} />
      </Suspense> : null}
    </div>
  );
}

export default Post;
