import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../services/reducres/user/authSlice";
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
import Search from "../Search/Search";
import { IoIosNotifications } from "react-icons/io"
import { Button } from "@material-tailwind/react";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth);
  const { post } = useSelector((state) => state.post)
  const handleLogout = () => dispatch(logout());

  return (
    <div className="w-[100%] p-4 bg-[#153462] flex items-center justify-around fixed z-50">
      <div className="flex items-center">
        <BiSearchAlt className="text-white mr-1" fontSize={25} />
        <Search placeholder="Search posts..." data={post} />
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
          <Link to={`/profile/${user._id}`}>
            <ProfileIcon style={{ color: "#fff" }} className="ml-6 " />
          </Link>
        ) : (
          <button className="px-2 bg-white rounded ml-6 font-poppins" onClick={() => {
            navigate("/login")
          }}>Login</button>
        )}
      </div>
      <div className="block md:hidden">
        {!user ? (
          <button className="px-2 bg-white rounded ml-6 font-poppins" onClick={() => {
            navigate("/login")
          }}>Login</button>
        ) : (
          <div className="flex items-center justify-center">
            <IoIosNotifications size={26} color="white" onClick={() => {
              navigate("/notifications")
            }} />
            <Button className="px-2  ml-6 font-poppins" onClick={handleLogout}>LogOut</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
