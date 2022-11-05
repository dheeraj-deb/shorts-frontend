import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BiSearchAlt } from "react-icons/bi";
import axios from "../../../util/Axios";
import Conversation from "./Conversation";
function UserList({ setCurrentChat }) {
  const { user } = useSelector((state) => state.auth);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await axios.get(`/chat/${user._id}`);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, []);

  return (
    <div className=" h-[100%] bg-slate-100 p-2 relative">
      {/* user-list header */}
      <div className="p-2">
        <h2 className="text-center font-poppins">Messages</h2>
        <div className="flex items-center mt-2">
          <BiSearchAlt fontSize={20} />
          <input
            type="search"
            className="outline-none bg-transparent font-poppins w-[100%] ml-1"
            placeholder="Search..."
          />
        </div>
      </div>
      {/* user-list */}
      {chats.map((chat) => {
        return (
          <div onClick={() => setCurrentChat(chat)}>
            <Conversation data={chat} currentUserId={user._id} />
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
