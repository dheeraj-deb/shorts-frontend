import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  SettingsIcon,
  CameraIcon,
  PlusIcon,
  ProfileIcon,
  MessageIcon,
} from "../Icons";

const Header = () => {
  return (
    <div className="fixed w-[100%] z-50">
      <nav className=" relative flex w-100 content-center justify-between p-4 bg-slate-400  ">
        <div>
          <h3 className="text-lg">Logo</h3>
        </div>
        <div>
          <input
            type="text"
            className="bg-slate-50 outline-none px-2 md:width-[400px]"
            placeholder="Search..."
          />
        </div>
        <div className="hidden md:flex w-100 ">
          <Link to="/">
            <HomeIcon className="text-xl ml-6" />
          </Link>
          <Link to="/live">
            <CameraIcon className="ml-6 " />
          </Link>
          <Link to="/message">
            <MessageIcon className="ml-6 " />
          </Link>
          <Link to="/fileupload">
            <PlusIcon className="ml-6" />
          </Link>
          <Link to="/settings">
            <SettingsIcon className="ml-6 " />
          </Link>
          <Link to="myprofile">
            <ProfileIcon className="ml-6 " />
          </Link>
        </div>
        <Link to="/settings">
          <SettingsIcon className="md:hidden" />
        </Link>
      </nav>
    </div>
  );
};

export default Header;
