import React from "react";
import { Link } from "react-router-dom";
import { FiUserPlus, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  return (
    <div className="relative">
      <div className="bg-slate-100 hidden md:flex flex-col w-100 h-screen p-3 ">
        {/* profile */}
        <div className="bg-white pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
          <div className="relative h-40">
            <img
              className="absolute h-full w-full object-cover"
              src="https://images.unsplash.com/photo-1448932133140-b4045783ed9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            />
          </div>
          <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
            <img
              className="object-cover w-full h-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
            />
          </div>
          <div className="mt-16 px-2">
            <h1 className="text-lg text-center font-semibold">Cassie</h1>
            <div className="flex justify-between">
              <div className="flex flex-col items-center">
                <h3 className="font-poppins font-bold">2300</h3>
                <p className="text-sm">Following</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-poppins font-bold">2300</h3>
                <p className="text-sm">Followers</p>
              </div>
              <div className="flex flex-col items-center">
                <h3 className="font-poppins font-bold">2300</h3>
                <p className="text-sm">Posts</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-3 flex flex-wrap px-1 border-t justify-between items-center">
            <div className="border rounded p-1 ">
              <button>
                <Link>View Profile</Link>
              </button>
            </div>
            <div className="flex items-center border rounded p-1">
              <Link className="mr-2">LogOut</Link>
              <FiLogOut />
            </div>
          </div>
        </div>
        <hr className="m-3" />
        {/* suggestions*/}
        <div>
          <h3 className="text-lg font-semibold font-poppins mb-2">
            Suggestions
          </h3>
          {/* users */}
          <div className="w-100">
            {/* ------------------- */}
            <div className="flex items-center justify-between mb-3 p-2 bg-white">
              <div className="flex items-center">
                <div className="flex space-x-2">
                  <div className="relative w-10 h-10">
                    <img
                      className="rounded-full border border-gray-100 shadow-sm"
                      src="https://randomuser.me/api/portraits/women/81.jpg"
                      alt="user image"
                    />
                    <div className="absolute top-0 right-0 h-3 w-3 my-1 border-2 border-white rounded-full bg-green-400 z-2"></div>
                  </div>
                </div>
                <h4 className="text-sm font-poppins hover:cursor-pointer ml-2">
                  Username
                </h4>
              </div>
              <div>
                <FiUserPlus
                  fontSize={20}
                  className="hover:cursor-pointer"
                  color="blue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
