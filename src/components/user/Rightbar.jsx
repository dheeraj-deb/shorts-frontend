import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import { DEFAULT_PROFILE, PROFILE_API } from "../../config";
import { getUser } from "../../services/api/UserRequestes";


const Rightbar = ({ userId, time }) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId)
        setUserData(data)
      }
      catch (error) {
        console.log(error)
      }
    }
    getUserData();
  }, [userId])




  return <div>
    {/* header */}
    <div className="w-100 p-1 border border-gray-100 px-2">
      <div className="flex items-center justify-start">
        {/* profilr */}
        <div className="mr-2">
          <img
            className="w-[35px] h-[35px] object-cover rounded-full"
            src={userData?.profileUri ? `${PROFILE_API}${userData.profileUri}` : DEFAULT_PROFILE}
            alt="profile"
          />
        </div>
        <div className=" w-[100%] ">
          <div>
            <h4 className="font-poppins font-normal">{userData?.username}</h4>
            <p className="font-poppins font-normal text-xs">started following you</p>
          </div>
          <p className="text-[10px] font-normal font-poppins">{format(time)}</p>
        </div>
      </div>
    </div>
  </div>;
};

export default Rightbar;
