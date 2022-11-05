import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import axios from "../../../util/Axios";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

function ChatBox({ chat, currentUserId }) {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(null);

  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUserId);
    const getUserData = async () => {
      const { data } = await axios.get(`/user/${userId}`);
      setUserData(data);
    };

    if (chat !== null) getUserData();
  }, [chat, currentUserId]);

  // const handleChange = (newMessage) => {
  //   setNewMessage(newMessage);
  // };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await axios.get(`/message/${chat._id}`);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) fetchMessages();
  }, [chat]);

  const handleSend = async (e) => {
    e.preventDefault();

    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id,
    };

    try {
      const { data } = await axios.post("/message/", message);
      setMessages([...messages, data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {chat ? (
        <div className=" border h-[90vh] relative overflow-y-scroll w-[100%]">
          {/* chat-header */}
          <div className="flex justify-between items-center bg-slate-300 p-2 mb-4">
            <div className="flex items-center">
              <div className="shadow h-12 w-12 rounded-full overflow-hidden border-2">
                <img
                  className="object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                  alt="profile"
                />
              </div>
              <div className="ml-2">
                <h3 className="font-poppins text-sm">{userData?.username}</h3>
                <p className="font-poppins text-xs font-thin">Online</p>
              </div>
            </div>
            <div>
              <SlOptionsVertical />
            </div>
          </div>
          {/* chat-box-messages */}
          <div className="px-2">
            {messages.map((message) => {
              return (
                <div>
                  <div className="flex">
                    <div className="shadow h-8 w-8 rounded-full overflow-hidden border-2">
                      <img
                        className="object-cover w-full h-full"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                        alt="profile"
                      />
                    </div>
                    <p className="ml-2 font-poppins text-gray-200 font-thin text-sm">
                      {format(message.createdAt)}
                    </p>
                  </div>
                  <div className="mt-1 px-1 py-3 w-fit max-w-[300px] bg-blue-500 rounded-bl-xl rounded-tr-xl">
                    <h4 className="break-words font-poppins text-white">
                      {message.text}
                    </h4>
                  </div>
                </div>
              );
            })}
            {/* user-text */}
            <div className="flex flex-col items-end">
              <div className="flex">
                <p className="mr-2 font-poppins text-gray-200 font-thin text-sm">
                  10:34
                </p>
                <div className="shadow h-8 w-8 rounded-full overflow-hidden border-2">
                  <img
                    className="object-cover w-full h-full"
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80"
                    alt="profile"
                  />
                </div>
              </div>
              <div className="mt-1 px-1 py-3 w-fit max-w-[300px] bg-blue-500 rounded-bl-xl rounded-tr-xl relative">
                <h4 className="break-words font-poppins text-white">Hello.</h4>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 absolute bottom-5 w-[100%]">
            <div className="w-[100%]">
              <input
                type="text"
                onChange={(e) => {
                  setNewMessage(e.target.value);
                }}
                className="w-[100%] font-poppins bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="text something..."
                required
              />
            </div>
            {/* <InputEmoji value={newMessage} onChange={handleChange} /> */}
            <div>
              <button
                onClick={handleSend}
                className=" font-poppins bg-blue-600 text-white p-2 ml-1 rounded-lg"
              >
                Sent
              </button>
            </div>
          </div>
        </div>
      ) : (
        <span className="text-center p-3">
          Tap on a chat to start Conversation
        </span>
      )}
    </>
  );
}

export default ChatBox;
