import { Button } from '@material-tailwind/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followAndUnFollow } from '../../../services/reducres/user/userSlice';

import { DEFAULT_PROFILE, PROFILE_API } from "../../../config"

function FollowerFollowingCard({ user }) {
    const current = useSelector((state) => state.user)


    const dispatch = useDispatch();

    const handleFollowUnFollow = () => {
        dispatch(followAndUnFollow(user._id));
    };

    return (
        <div className="w-100 p-1 border border-gray-100">
            <div className="flex items-center justify-start">
                {/* profilr */}
                <div className="mr-2">
                    <img
                        className="w-[49px] h-[45px] object-cover rounded-full"
                        src={user.profileUri ? `${PROFILE_API}${user.profileUri}` : DEFAULT_PROFILE}
                        alt="profile"
                    />
                </div>
                <div className=" w-[100%] flex justify-between items-center">
                    <h4 className="font-poppins font-normal">{user.username}</h4>
                    {current?.user?.following?.includes(user._id) ? (
                        <Button onClick={handleFollowUnFollow} size='sm' color="red">UnFollow</Button>
                    ) : (
                        <Button onClick={handleFollowUnFollow} size='sm'>Follow</Button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FollowerFollowingCard