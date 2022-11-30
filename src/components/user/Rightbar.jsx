import React from "react";
import { IoIosNotifications } from "react-icons/io"

const Rightbar = () => {




  return <div className="w-[100%] h-[100%] bg-white">
    {/* header */}
    <div className="px-2 py-3 flex items-center justify-between mb-2 border">
      <h3 className="font-poppins font-normal text-lg">Notifications</h3>
      <IoIosNotifications size={23} />
    </div>
    <div className="w-100 p-1 border border-gray-100 px-2">
      <div className="flex items-center justify-start">
        {/* profilr */}
        <div className="mr-2">
          <img
            className="w-[35px] h-[35px] object-cover rounded-full"
            src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
            alt="profile"
          />
        </div>
        <div className=" w-[100%]">
          <div>
            <h4 className="font-poppins font-normal">username</h4>
            <p className="font-poppins font-normal text-xs">started following you</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Rightbar;
