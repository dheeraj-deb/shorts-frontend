import React from "react";

import { followAndUnFollow } from "../../../services/reducres/user/UserSlice";

import { AiOutlineUserAdd, AiOutlineUserDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function SuggestionCard({ user }) {
   
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  console.log("crr user", currentUser);
  const handleFollowUnFollow = () => {
    dispatch(followAndUnFollow(user._id));
  };

  return (
    <div className="w-100 p-1 border border-gray-100">
      <div className="flex items-center justify-start">
        {/* profilr */}
        <div className="mr-2">
          <img
            className="w-[40px] h-[40px] object-cover rounded-full"
            src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
            alt="profile"
          />
        </div>
        <div className=" w-[100%] flex justify-between items-center">
          <h4 className="font-poppins font-normal">{user.username}</h4>
          {currentUser.user.following.includes(user._id) ? (
            <AiOutlineUserDelete
              className="cursor-pointer"
              size={20}
              onClick={handleFollowUnFollow}
            />
          ) : (
            <AiOutlineUserAdd
              className="cursor-pointer"
              size={20}
              onClick={handleFollowUnFollow}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestionCard;
