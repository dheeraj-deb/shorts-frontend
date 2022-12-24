import { Button } from '@material-tailwind/react'
import React, { useEffect, useRef, useState } from 'react'
import ChatHeader from './ChatHeader'
import { format } from "timeago.js";

import "./ChatBox.scss"
import { getUser } from '../../../services/api/UserRequestes';
import { addMessage, getMessages } from '../../../services/api/MessageRequests';

function ChatBox({ chat, currentUser, setSendMessage, receivedMessage, setShowMessageInSm }) {

    const [userData, setUserData] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        const userId = chat?.members?.find((id) => id !== currentUser);
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId);
                console.log(data);
                setUserData(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (chat !== null) getUserData();
    }, [chat, currentUser]);


    // fetch messages
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const { data } = await getMessages(chat._id);
                setMessages(data);
            } catch (error) {
                console.log(error);
            }
        };

        if (chat !== null) fetchMessages();
    }, [chat]);


    // Always scroll to last Message
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages])

    const handleSent = async (e) => {
        console.log(newMessage);
        e.preventDefault()
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id,
        }
        const receiverId = chat.members.find((id) => id !== currentUser);
        // send message to socket server
        setSendMessage({ ...message, receiverId })
        // send message to database
        try {
            const { data } = await addMessage(message);
            setMessages([...messages, data]);
            setNewMessage("");
        }
        catch
        {
            console.log("error")
        }
    }


    useEffect(() => {
        console.log("Message Arrived: ", receivedMessage)
        if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
            setMessages([...messages, receivedMessage]);
        }

    }, [receivedMessage])



    const scroll = useRef();
    const imageRef = useRef();


    return (
        <>
            {
                chat ? (
                    <div>
                        <ChatHeader user={userData} setShowMessageInSm={setShowMessageInSm} />
                        <div className='flex flex-col overflow-scroll h-[450px] bg-white mb-2 rounded-md mt-2 p-2'>
                            {messages.map((message) => (
                                <>
                                    <div ref={scroll}
                                        className={
                                            message.senderId === currentUser
                                                ? "message own"
                                                : "message"
                                        }
                                        style={{ marginBottom: 5 }}
                                    >
                                        <span>{message.text}</span>{" "}
                                        <span>{format(message.createdAt)}</span>
                                    </div>
                                </>
                            ))}
                        </div>
                        <div className='bg-white  px-2 py-1 pb-[5rem] md:pb-0 flex justify-between rounded-md fixed bottom-1 w-[90%] md:w-[73%]'>
                            <input className='w-[100%] px-2 outline-none' value={newMessage} onChange={(e) => {
                                setNewMessage(e.target.value)
                            }} type="text" placeholder='text something....' />
                            <Button
                                onClick={handleSent}
                                style={{
                                    fontFamily: "Poppins",
                                }}
                            >
                                Sent
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <span className="  w-[100%] h-screen chatbox-empty-message flex align-center justify-center front-poppins">
                            Tap on a chat to start conversation...
                        </span>
                    </div>
                )
            }
        </>
    )
}

export default ChatBox