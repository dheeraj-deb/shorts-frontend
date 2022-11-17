import React from 'react'

function ChatHeader({ user }) {
    return (
        <div className="w-100 p-1 bg-white rounded-md">
            <div className="flex items-center justify-start ">
                {/* profilr */}
                <div className="mr-2">
                    <img
                        className="w-[40px] h-[40px] object-cover rounded-full"
                        src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
                        alt="profile"
                    />
                </div>
                <div className=" w-[100%] flex justify-between items-center">
                    <h4 className="font-poppins font-normal">{user?.username}</h4>
                    <p>options</p>
                </div>
            </div>
        </div>
    )
}

export default ChatHeader