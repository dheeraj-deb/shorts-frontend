import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import Spinner from "../../Spinner";
import { toast } from "react-toastify";

import UseIntersectionObserver from "../../../IntersectionObserver";
import { likeAndDislike, deletePost } from "../../../services/reducres/post/postSlice";

import Comment from "../comment/Comment";
import DropDown from "../../DropDown";

function Post({ post, isLoading, user }) {
  const dispatch = useDispatch();
  const [isCommentOn, setIsCommentOn] = useState(false);
  const videoRef = useRef(null);
  const [ref, entry] = UseIntersectionObserver({ threshold: 0.8 });

  const options = [
    {
      name: "Report",
      fn: () => {
        console.log("here");
      },
      id: 0,
    },
  ];

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
              src="https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2022/04/17/fleetwood-1694-patricksmith.jpg"
              alt=""
            />
          </div>
          <h4>{post?.user ? post.user[0].username : ""}</h4>
        </div>
        <DropDown options={options} />
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
      {isCommentOn ? <Comment postId={post._id} user={user} /> : null}
    </div>
  );
}

export default Post;