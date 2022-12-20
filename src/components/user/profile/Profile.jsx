import React, { Suspense, useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import ProfilePosts from "./ProfilePosts";
import Saved from "./Saved";
import ProfileEditModal from "./ProfileEditModal"
import { fetchUser } from "../../../services/reducres/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

import { DEFAULT_PROFILE, PROFILE_API } from "../../../config"

import Posts from "./Posts"
const FollowingAndFollowerModal = React.lazy(() => import('./FollowingAndFollowerModal'))

function Profile({ id }) {
  const [navigatePost, setNavigatePosts] = useState(true)
  const [open, setOpen] = useState(false)
  const [openFollower, setOpenFollower] = useState(false)
  const [openFollowing, setOpenFollowing] = useState(false)
  const [openFoModal, setOpenFoModal] = useState(false)

  const dispatch = useDispatch()
  const authData = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(fetchUser(id))
  }, [open])


  const { user } = useSelector((state) => state.user)


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
            src={user.profileUri ? `${PROFILE_API}${user.profileUri}` : DEFAULT_PROFILE}
            alt="profile"
          />
          <div className="absolute right-0 top-5">
            {authData.user._id === user._id && <GrEdit onClick={() => {
              console.log("clicked");
              setOpen((prev) => {
                console.log("prev", prev);
                return !prev
              })
            }} />}
          </div>
        </div>
        <div className="w-100 flex flex-col items-center p-2">
          <h3 className="font-poppins font-bold text-lg">{user?.username}</h3>
          <p className="font-poppins font-medium text-sm">{user?.bio}</p>

          {/* stat*/}
          <div className="flex">
            <div className="text-center p-4" onClick={() => {
              setOpenFollower(true)
              setOpenFoModal((prev) => !prev)
              setOpenFollowing(false)
            }}>
              <h3 className="font-poppins font-medium text-lg">{user?.followers?.length}</h3>
              <p className="font-poppins font-medium text-sm text-gray-600">Followers</p>
            </div>

            <div className="text-center p-4" >
              <h3 className="font-poppins font-medium text-lg">{user?.posts?.length}</h3>
              <p className="font-poppins font-medium text-sm text-gray-600">Posts</p>
            </div>

            <div className="text-center p-4" onClick={() => {
              setOpenFollowing(true)
              setOpenFoModal((prev) => !prev)
              setOpenFollower(false)
            }}>
              <h3 className="font-poppins font-medium text-lg">{user?.following?.length}</h3>
              <p className="font-poppins font-medium text-sm text-gray-600">Following</p>
            </div>
          </div>
        </div>
      </div>
      {/* posts */}
      <div className="md:w-[700px] lg:w-[1000px]">
        <ProfilePosts setPost={changePage} />
        {navigatePost ? (
          <Posts user={user} />
        ) : (<Saved user={user} />)}
        <ProfileEditModal open={open} setOpen={setOpen} user={user} />
        <Suspense fallback={<div>Loading...</div>}>
          <FollowingAndFollowerModal userId={user._id} openFollower={openFollower} openFollowing={openFollowing} setOpenFollower={setOpenFollower} setOpenFollowing={setOpenFollowing} openFoModal={openFoModal} setOpenFoModal={setOpenFoModal} />
        </Suspense>
      </div>
    </div>
  );
}

export default Profile;
