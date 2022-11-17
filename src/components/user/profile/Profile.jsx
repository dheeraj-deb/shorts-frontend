import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "../../../util/Axios";
import Posts from "./Posts";
import ProfilePosts from "./ProfilePosts";
import Saved from "./Saved";

function Profile() {
  const [navigatePost, setNavigatePosts] = useState(true)
  const [navigateSaved, setNavigateSaved] = useState(true)

  const { user } = useSelector((state) => state.user);

  const changePage = (page) => {
    if (page) {
      setNavigatePosts(true)
    } else {
      setNavigatePosts(false)
    }
  }

  return (
    <div className="w-[100%] pt-[4rem] bg-white flex flex-col items-center">
      {/* header */}
      <div className=" p-2 w[100%] flex flex-col items-center">
        {/* profile */}
        <div className="w-32 h-32">
          <img
            className=" w-100 h-[100%] object-cover rounded-full"
            src="https://i.pinimg.com/originals/3a/16/df/3a16df8d7ddb3840a57e5aadf79b8ee2.jpg"
            alt="profile"
          />
        </div>
        <div className="w-100 flex flex-col items-center p-2">
          <h3 className="font-poppins font-bold text-lg">{user?.username}</h3>
          <p className="font-poppins font-medium text-sm">something.........</p>

          {/* stat*/}
          <div className="flex">
            <div className="text-center p-4">
              <h3 className="font-poppins font-medium text-lg">{user?.followers.length}</h3>
              <p className="font-poppins font-medium text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center p-4" >
              <h3 className="font-poppins font-medium text-lg">{user?.posts.length}</h3>
              <p className="font-poppins font-medium text-sm text-gray-600">Posts</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-poppins font-medium text-lg">{user?.following.length}</h3>
              <p className="font-poppins font-medium text-sm text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
      {/* posts */}
      <div className="md:w-[700px] lg:w-[1000px]">
        <ProfilePosts setPost={changePage} />
        {console.log(navigatePost)}
        {navigatePost ? (<Posts user={user} />) : (<Saved />)}
      </div>
    </div>
  );
}

export default Profile;
