import React, { useEffect, useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { useSelector } from "react-redux";
import ChatBox from "./ChatBox";
import UserList from "./UserList";

import { io } from "socket.io-client";
import { useRef } from "react";

function Chat() {
  const [currentChat, setCurrentChat] = useState(null);
  const { user } = useSelector((state) => state.auth);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("http://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      console.log(onlineUsers);
    });
  }, [user]);

  return (
    <div className="flex">
      <UserList setCurrentChat={setCurrentChat} />
      <ChatBox chat={currentChat} currentUserId={user._id} />
    </div>
  );
}

export default Chat;
