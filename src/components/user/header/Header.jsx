import React from "react";
import { useSelector } from "react-redux";

import { BiSearchAlt } from "react-icons/bi";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  SettingsIcon,
  CameraIcon,
  PlusIcon,
  ProfileIcon,
  MessageIcon,
} from "../../Icons";

const Header = () => {

  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-[100%] p-4 bg-[#153462] flex items-center justify-around fixed z-50">
      <div className="flex items-center">
        <BiSearchAlt className="text-white mr-1" fontSize={25} />
        <input
          className="px-2 py-1 bg-transparent outline-none text-white"
          type="search"
          placeholder="Search..."
        />
      </div>
      <div className="hidden md:block">
        <TiSocialInstagramCircular className="text-white mr-1" fontSize={25} />
      </div>
      <div className="hidden md:flex">
        <Link to="/">
          <HomeIcon style={{ color: "#fff" }} className="text-xl ml-6" />
        </Link>
        {/* <Link to="/live">
          <CameraIcon style={{ color: "#fff" }} className="ml-6 " />
        </Link> */}
        <Link to="/message">
          <MessageIcon style={{ color: "#fff" }} className="ml-6 " />
        </Link>
        <Link to="/file-upload">
          <PlusIcon style={{ color: "#fff" }} className="ml-6" />
        </Link>
        {/* <Link to="/settings">
          <SettingsIcon style={{ color: "#fff" }} className="ml-6 " />
        </Link> */}
        {user ? (
          <Link to="my-profile">
            <ProfileIcon style={{ color: "#fff" }} className="ml-6 " />
          </Link>
        ) : (
          <button className="px-2 bg-white rounded ml-6 font-poppins" onClick={()=>{
            navigate("/login")
          }}>Login</button>
        )}
      </div>
      <Link to="/settings" className="block md:hidden">
        <SettingsIcon style={{ color: "#fff" }} className="ml-6 " />
      </Link>
    </div>
  );
};

export default Header;
