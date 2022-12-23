import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { Header, MobileNav, Rightbar } from '../../components/user';
import { fetchNotifications } from "../../services/api/UserRequestes";
import { IoIosNotifications } from "react-icons/io"
import { useRef } from 'react';
import { io } from 'socket.io-client';

function Notification() {
    const socket = useRef()
    const [notifications, setNotifications] = useState([])
    const [receivedNotification, setReceivedNotification] = useState()
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        const getNotification = async () => {
            try {
                const { data } = await fetchNotifications(user._id);
                setNotifications(data);
            } catch (error) {
                console.log(error);
            }
        };
        getNotification();

    }, [user._id]);


    // Connect to Socket.io
    useEffect(() => {
        socket.current = io("ws://localhost:8080");
        socket.current.emit("new-user-add", user._id);
    }, [user]);

    // Get the notification from socket server
    useEffect(() => {
        socket.current.on("receive-notification", (data) => {
            console.log(data)
            setReceivedNotification(data);
        });
    }, []);

    useEffect(() => {
        if (receivedNotification !== null) {
            setNotifications([...notifications, receivedNotification]);
        }

    }, [receivedNotification])

    return (
        <>
            <div className='md:hidden'>
                <Header />
                <MobileNav />
            </div>
            <div className=" pt-[4.3rem] md:pt-0 w-[100%] h-[100%] bg-white">
                <div className="px-2 py-3 flex items-center justify-between mb-2 border">
                    <h3 className="font-poppins font-normal text-lg">Notifications</h3>
                    <IoIosNotifications size={23} />
                </div>
                {
                    notifications?.map((notification) => {
                        return (
                            <Rightbar userId={notification?.userOne} time={notification?.createdAt} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Notification