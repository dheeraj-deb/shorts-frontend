import React, { useRef } from "react";
import {
  ChatBox,
  Conversation,
  Header,
  MobileNav,
} from "../../components/user/index";
import { BiSearchAlt } from "react-icons/bi"

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { userChats } from "../../services/api/ChatRequests";

function Chat() {

  const socket = useRef();
  const { user } = useSelector((state) => state.auth);


  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const [showMessageInSm, setShowMessageInSm] = useState(false)

  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();

  }, [user._id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8080");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceivedMessage(data);
    });
  }, []);


  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <>
      <Header />
      <MobileNav />
      <div className="pt-[4.5rem] px-2 flex relative">
        <div className={`w-[100%] md:w-1/4 bg-white px-2 py-1 md:block ${showMessageInSm ? `hidden` : 'block'}`}>
          <div className="flex items-center mb-4">
            <BiSearchAlt size={20} className="mlr-2" />
            <input onChange={(e) => handleChange(e.target.value)} className="p-2 outline-none w-[100%] bg-gray-100 rounded-lg" type="search" placeholder="Search user.." />
          </div>
          {chats?.map((chat) => (
            <div
              onClick={() => {
                setCurrentChat(chat);
                setShowMessageInSm(true)
              }}
            >
              <Conversation
                user={user}
                data={chat}
                currentUser={user._id}
                online={checkOnlineStatus(chat)}
              />
            </div>
          ))}
        </div>
        <div className={`md:w-3/4 w-[100%] bg-transparent md:block ${showMessageInSm ? 'block' : 'hidden'} md:block px-2 py-1 relative`}>
          <ChatBox chat={currentChat}
            setShowMessageInSm={setShowMessageInSm}
            currentUser={user._id}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage} />
        </div>
      </div>
    </>
  );
}

export default Chat;
