import React from "react";
import { followAndUnFollow } from "../../../services/reducres/user/userSlice";

import { useDispatch } from "react-redux";
import { Button } from "@material-tailwind/react";

function SuggestionCard({ user }) {
  console.log("suggestion user", user);
  const dispatch = useDispatch();

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
          {user.following.includes(user._id) ? (
            <Button onClick={handleFollowUnFollow} size='sm' color="red">UnFollow</Button>
          ) : (
            <Button onClick={handleFollowUnFollow} size='sm'>Follow</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestionCard;
