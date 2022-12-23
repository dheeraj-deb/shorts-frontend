import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { followAndUnFollow } from "../../../services/reducres/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-tailwind/react";

import { DEFAULT_PROFILE, PROFILE_API } from "../../../config"
import { createNotification } from "../../../services/api/UserRequestes";
import { io } from "socket.io-client";

function SuggestionCard({ user }) {

  const navigate = useNavigate()
  const dispatch = useDispatch();
  const socket = useRef()
  const [sendNotification, setSendNotification] = useState({})
  const current = useSelector((state) => state.user)

  const handleFollowUnFollow = () => {
    dispatch(followAndUnFollow(user._id));
  };


  const viewUser = (userId) => {
    navigate(`/profile/${userId}`)
  }


  useEffect(() => {
    socket.current = io("ws://localhost:8080");
    socket.current.emit("new-user-add", user._id);
  }, []);

  // Send Notification to socket server
  useEffect(() => {
    if (sendNotification !== null) {
      socket.current.emit("send-notification", sendNotification);
    }
  }, [sendNotification]);

  return (
    <div className="w-100 p-1 border border-gray-100">
      <div className="flex items-center justify-start">
        {/* profilr */}
        <div className="mr-2">
          <img
            className="w-[50px] h-[40px] object-cover rounded-full"
            src={user.profileUri ? `${PROFILE_API}${user.profileUri}` : DEFAULT_PROFILE}
            alt="profile"
          />
        </div>
        <div className=" w-[100%] flex justify-between items-center">
          <h4 className="font-poppins font-normal hover:pointer" onClick={() => viewUser(user._id)}>{user.username}</h4>
          {current?.user?.following?.includes(user._id) ? (
            <Button onClick={handleFollowUnFollow} size='sm' color="red">UnFollow</Button>
          ) : (
            <Button onClick={() => {
              handleFollowUnFollow()
              createNotification(user._id)
              setSendNotification({ userTwo: user._id, userOne: current.user._id })
            }} size='sm'>Follow</Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SuggestionCard;
