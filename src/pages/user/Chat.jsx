import React, { useRef } from "react";
import {
  ChatBox,
  Conversation,
  Header,
  MobileNav,
} from "../../components/user/index";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { userChats } from "../../services/api/ChatRequests";

function Chat() {

  const dispatch = useDispatch();
  const socket = useRef();
  const { user } = useSelector((state) => state.user);
  

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  // Get the chat in chat section
  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        console.log(data);
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
    }

    );
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
      <div className="pt-[4.5rem] px-2 flex">
        <div className=" w-[100%] md:w-1/4 bg-white px-2 py-1">
          {chats?.map((chat) => (
            <div
              onClick={() => {
                setCurrentChat(chat);
              }}
            >
              <Conversation
                data={chat}
                currentUser={user._id}
                online={checkOnlineStatus(chat)}
              />
            </div>
          ))}
        </div>
        <div className="w-3/4 bg-transparent hidden md:block px-2 py-1 relative">
          <ChatBox chat={currentChat}
            currentUser={user._id}
            setSendMessage={setSendMessage}
            receivedMessage={receivedMessage} />
        </div>
        {/* <div className="md:hidden">
          <ChatBox  chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}/>
        </div> */}
      </div>
    </>
  );
}

export default Chat;