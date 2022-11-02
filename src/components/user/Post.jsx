import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import Spinner from "../Spinner";

import { likeAndDislike } from "../../services/reducres/post/postSlice";
import { toast } from "react-toastify";

import UseIntersectionObserver from "../../IntersectionObserver";
import { useRef } from "react";

function Post({ post, isLoading, userId }) {
  const [isCommentOn, setIsCommentOn] = useState(false);
  const videoRef = useRef(null);
  const [ref, entry] = UseIntersectionObserver({ threshold: 0.8 });

  if (videoRef.current) {
    if (entry.isIntersecting) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  const dispatch = useDispatch();

  function handleLike() {
    if (userId) {
      dispatch(likeAndDislike({ postId: post._id, userId }));
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
    <div className="w-100 h[100vh] mb-4 border">
      {/* post header */}
      <section className="w-100 bg-gray-200 flex items-center justify-between p-2">
        <div className="flex items-center">
          <div className="w-[45px] h-[45px] mr-2">
            <img
              className="w-[100%] h-[100%] relative object-cover rounded-full"
              src="https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2022/04/17/fleetwood-1694-patricksmith.jpg"
              alt=""
            />
          </div>
          <h4>{post?.user ? post.user[0].username : ""}</h4>
        </div>
        <SlOptionsVertical />
      </section>
      <section className="h-[200px] md:h-[300px]" ref={ref}>
        <video
          className="w-[100%] h-[100%] object-cover "
          src={`http://localhost:4000/shorts/api/stream/${post._id}`}
          type="video/mp4"
          loop={true}
          ref={videoRef}
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
            {post.likes.includes(userId) ? (
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
          <FiShare2 fontSize={22} className="self-start mr-2" />
        </div>
        <div className="w-100 px-2">
          <p className="text-sm text-left">{post.likes.length}</p>
        </div>
        <div>
          <p className="text-xs font-thin mr-2">
            {moment(post.time).format("llll")}
          </p>
        </div>
      </section>
      {isCommentOn ? (
        <section className="w-100 p-4">
          <div className="flex justify-between items-center">
            <input
              type="text"
              className=" w-100 border outline-none mr-2 px-2 py-1 w-[100%]"
              placeholder="Post comments......."
            />
            <button className="border bg-blue-600 rounded-sm px-2 py-1">
              post
            </button>
          </div>
        </section>
      ) : null}
    </div>
  );
}

export default Post;
