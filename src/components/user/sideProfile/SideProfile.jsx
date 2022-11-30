import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { logout } from "../../../services/reducres/user/authSlice";

import { GrEdit } from "react-icons/gr";
import { Button } from "@material-tailwind/react";

function SideProfile({user}) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleLogout = () => dispatch(logout());

  return (
    <div className="bg-white w-100 p-2">
      <div className="p-4">
        {/* icon */}
        <div className="flex justify-end px-3">
          <GrEdit />
        </div>
        {/* profile */}
        <div className="flex justify-center mb-2">
          <img
            className="w-[100px] h-[100px] object-cover rounded-full"
            src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
            alt="profile"
          />
        </div>
        <h3 className="font-poppins text-center font-bold text-sm">
          {user?.username}
        </h3>
        {/* <p className="font-poppins text-center font-medium text-xs text-gray-400">
          Ui/Ux Designer
        </p> */}
      </div>
      <div className="p-4">
        <div className="flex justify-between mb-3">
          <div className="text-center">
            <h3 className="font-poppins font-bold">{user?.followers?.length}</h3>
            <p className="font-poppins font-medium text-gray-400">Followers</p>
          </div>
          <div className="text-center">
            <h3 className="font-poppins font-bold">{user?.posts?.length}</h3>
            <p className="font-poppins font-medium text-gray-400">Posts</p>
          </div>
          <div className="text-center">
            <h3 className="font-poppins font-bold">{user?.following?.length}</h3>
            <p className="font-poppins font-medium text-gray-400">Following</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-between p-3">
        <Button
          style={{
            fontFamily: "Poppins",
          }}
          onClick={() => {
            navigate('/my-profile')
          }}
        >
          Profile
        </Button>
        <Button
          onClick={handleLogout}
          style={{
            fontFamily: "Poppins",
          }}
        >
          LogOut
        </Button>
      </div>
    </div>
  );
}

export default SideProfile;
