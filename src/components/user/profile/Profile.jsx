import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../../util/Axios";

function Profile() {
  const { user } = useSelector((state) => state.auth);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const { data } = await axios.get(`/user/posts/${user?._id}`);
      console.log(data);
      setVideos(data.posts);
    };

    fetchUserPosts();
  }, []);

  return (
    <div className="max-w-2xl mx-auto pt-[4.5rem]">
      <div className="px-3 py-2">
        <div className="flex flex-col gap-1 text-center">
          <a
            className="block mx-auto bg-center bg-no-repeat bg-cover w-20 h-20 rounded-full border border-gray-400 shadow-lg"
            href=""
            style={{
              backgroundImage:
                "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg",
            }}
          ></a>
          <p className="font-serif font-semibold">{user?.username}</p>
          {/* <span className="text-sm text-gray-400">
            New York, NY - Los Angeles, CA
          </span>
          <span className="text-sm text-gray-400">
            https://www.youtube.com/watch?v=dQw4w9WgXcQ
          </span> */}
        </div>

        <div className="flex justify-center items-center gap-2 my-3">
          <div className="font-semibold text-center mx-4">
            <p className="text-black">{user?.posts.length}</p>
            <span className="text-gray-400">Posts</span>
          </div>
          <div className="font-semibold text-center mx-4">
            <p className="text-black">{user?.followers.length}</p>
            <span className="text-gray-400">Followers</span>
          </div>
          <div className="font-semibold text-center mx-4">
            <p className="text-black">{user?.following.length}</p>
            <span className="text-gray-400">Folowing</span>
          </div>
        </div>

        {/* <div className="flex justify-center gap-2 my-5">
          <button className="bg-pink-500 px-10 py-2 rounded-full text-white shadow-lg">
            Follow
          </button>
          <button className="bg-white border border-gray-500 px-10 py-2 rounded-full shadow-lg">
            Message
          </button>
        </div> */}

        <div className="flex justify-between items-center">
          <button className="w-full py-2 border-b-2 border-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button>
          <button className="w-full py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2 my-3">
          {videos.map((video) => {
            return (
              <>
                <video
                  src={
                    video
                      ? `http://localhost:4000/shorts/api/stream/${video._id}`
                      : null
                  }
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profile;
