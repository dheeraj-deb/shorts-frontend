import React, { useEffect, useState } from "react";
import axios from "../../../util/Axios";

function Conversation({ data, currentUserId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userId = data.members.find((id) => id !== currentUserId);
    try {
      const getUserData = async () => {
        const { data } = await axios.get(`/user/${userId}`);
        setUserData(data);
      };
      getUserData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="border px-2 py-1 mt-3">
      <div className="flex">
        {/* icon */}
        <div className="shadow h-12 w-12 rounded-full overflow-hidden border-2">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
            alt="profile"
          />
        </div>
        <div className="flex w-[81%] justify-between ml-2 items-center">
          <div>
            <h3 className="font-poppins text-sm ">{userData?.username}</h3>
            <p className="font-poppins text-xs font-light">Online</p>
          </div>
          <div>
            <h3 className="font-poppins text-end text-xs">10:30</h3>
            <p className="font-poppins text-end text-xs">2</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversation;
