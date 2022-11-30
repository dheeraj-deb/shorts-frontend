import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import Posts from "./Posts";
import ProfilePosts from "./ProfilePosts";
import Saved from "./Saved";
import ProfileEditModal from "./ProfileEditModal"

function Profile({ user }) {
  const [navigatePost, setNavigatePosts] = useState(true)
  const [navigateSaved, setNavigateSaved] = useState(true)
  const [open, setOpen] = useState(false)

  const changePage = (page) => {
    if (page) {
      setNavigatePosts(true)
    } else {
      setNavigatePosts(false)
    }
  }

  return (
    <div className="w-[100%] h-[100%] pt-[4rem] bg-white flex flex-col items-center relative">
      {/* header */}
      <div className=" p-2 w[100%] flex flex-col items-center relative">
        {/* profile */}
        <div className="w-32 h-32">
          <img
            className=" w-100 h-[100%] object-cover rounded-full"
            src="https://i.pinimg.com/originals/3a/16/df/3a16df8d7ddb3840a57e5aadf79b8ee2.jpg"
            alt="profile"
          />
          <div className="absolute right-0 top-5">
            <GrEdit onClick={() => setOpen((prev) => !prev)} />
          </div>
        </div>
        <div className="w-100 flex flex-col items-center p-2">
          <h3 className="font-poppins font-bold text-lg">{user?.username}</h3>
          <p className="font-poppins font-medium text-sm">something.........</p>

          {/* stat*/}
          <div className="flex">
            <div className="text-center p-4">
              <h3 className="font-poppins font-medium text-lg">{user?.followers?.length}</h3>
              <p className="font-poppins font-medium text-sm text-gray-600">Followers</p>
            </div>
            <div className="text-center p-4" >
              <h3 className="font-poppins font-medium text-lg">{user?.posts?.length}</h3>
              <p className="font-poppins font-medium text-sm text-gray-600">Posts</p>
            </div>
            <div className="text-center p-4">
              <h3 className="font-poppins font-medium text-lg">{user?.following?.length}</h3>
              <p className="font-poppins font-medium text-sm text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
      {/* posts */}
      <div className="md:w-[700px] lg:w-[1000px]">
        <ProfilePosts setPost={changePage} />
        {navigatePost ? (<Posts user={user} />) : (<Saved user={user} />)}
        <ProfileEditModal open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Profile;
