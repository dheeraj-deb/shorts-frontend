import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from '../../../services/api/UserRequestes'

function Conversation({ data, currentUser, online }) {


    const [userData, setUserData] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {

        const userId = data.members.find((id) => id !== currentUser)
        const getUserData = async () => {
            try {
                const { data } = await getUser(userId)
                setUserData(data)
                // dispatch({ type: "SAVE_USER", data: data })
            }
            catch (error) {
                console.log(error)
            }
        }

        getUserData();
    }, [])


    return (
        <div className="w-100 p-1 border border-gray-100">
            <div className="flex items-center justify-start">
                {/* profilr */}
                <div className="mr-2">
                    <img
                        className="w-[40px] h-[40px] object-cover rounded-full"
                        src="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
                        alt="profile"
                    />
                </div>
                <div className=" w-[100%] flex justify-between items-center">
                    <div>
                        <h4 className="font-poppins font-normal">{userData?.username}</h4>
                        <span style={{ color: online ? "#51e200" : "" }}>{online ? "Online" : "Offline"}</span>
                    </div>
                    <div>
                        <p className='font-poppins text-center'>1</p>
                        <p className='font-poppins text-center'>time</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversation