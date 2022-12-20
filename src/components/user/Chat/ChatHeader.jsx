import React from 'react'
import { BsBoxArrowLeft } from "react-icons/bs"
import { DEFAULT_PROFILE, PROFILE_API } from '../../../config'

function ChatHeader({ user, setShowMessageInSm }) {
    return (
        <div className="w-100 p-1 bg-white rounded-md">
            <div className="flex items-center justify-start px-2">
                {/* profilr */}
                <div className="mr-2">
                    <img
                        className="w-[40px] h-[40px] object-cover rounded-full"
                        src={user?.profileUri ? `${PROFILE_API}${user?.profileUri}` : DEFAULT_PROFILE}
                        alt="profile"
                    />
                </div>
                <div className=" w-[100%] flex justify-between items-center">
                    <h4 className="font-poppins font-normal">{user?.username}</h4>
                    <div className='px-3 md:hidden'>
                        <BsBoxArrowLeft size={20} onClick={() => {
                            setShowMessageInSm(false)
                        }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader