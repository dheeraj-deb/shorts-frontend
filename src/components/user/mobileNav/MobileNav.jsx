import React from "react";
import { HomeIcon, MessageIcon, CameraIcon, SettingsIcon, PlusIcon, ProfileIcon } from "../../Icons"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const MobileNav = () => {

  const { user } = useSelector((state) => state.auth);

  return (
    <div className="fixed  bottom-0 w-[100%] bg-[#153462] md:hidden z-50">
      <div className="w-[100%] h-[70px] flex justify-center items-center ">
        <ul className="flex w-[100%] justify-between">
          <li className="relative list-none w-[70px] h-[70px] z-1">
            <Link to='/' className="relative flex justify-center items-center flex-col w-[100%] h-[70px] transition duration-150 hover:-translate-y-4">
              <span className="relative block ">
                <HomeIcon style={{ color: "#fff" }} />
              </span>
            </Link>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-1">
            <Link to='/message' className="relative flex justify-center items-center flex-col w-[100%] h-[70px] transition duration-150 hover:-translate-y-4">
              <span className="relative block ">
                <MessageIcon style={{ color: "#fff" }} />
              </span>
            </Link>
          </li>
          <li className="relative list-none w-[70px] h-[70px] z-1">
            <Link to='/file-upload' className="relative flex justify-center items-center flex-col w-[100%] h-[70px] transition duration-150 hover:-translate-y-4">
              <span className="relative block ">
                <PlusIcon style={{ color: "#fff" }} />
              </span>
            </Link>
          </li>
          {/* <li className="relative list-none w-[70px] h-[70px] z-1">
            <Link to='/live' className="relative flex justify-center items-center flex-col w-[100%] h-[70px] transition duration-150 hover:-translate-y-4">
              <span className="relative block ">
                <CameraIcon style={{ color: "#fff" }} />
              </span>
            </Link>
          </li> */}
          <li className="relative list-none w-[70px] h-[70px] z-1">
            <Link to={`/profile${user?._id}`} className="relative flex justify-center items-center flex-col w-[100%] h-[70px] transition duration-150 hover:-translate-y-4">
              <span className="relative block ">
                <ProfileIcon style={{ color: "#fff" }} />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
