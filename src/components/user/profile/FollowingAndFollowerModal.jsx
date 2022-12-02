import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { editProfile } from "../../../services/reducres/user/userSlice"
import { Input, Textarea } from "@material-tailwind/react";
import { useEffect } from "react";
import { getFollowers, getFollowing } from "../../../services/api/UserRequestes";
import FollowerFollowingCard from "./FollowerFollowingCard";

function FollowingAndFollowerModal({ userId, openFollower, setOpenFollower, openFollowing, setOpenFollowing, openFoModal, setOpenFoModal }) {
    const cancelButtonRef = useRef(null);


    let filteredFollowers = []
    let filteredFollowing = []

    const [followers, setFollowers] = useState([])
    const [following, setFollowing] = useState([])
    const [query, setQuery] = useState("")


    if (followers.length) {
        filteredFollowers = followers?.filter((user) => {
            return user.username.toLowerCase().includes(query.toLocaleLowerCase())
        })
    }

    if (following.length) {
        filteredFollowing = following?.filter((user) => {
            return user.username.toLowerCase().includes(query.toLocaleLowerCase())
        })
    }

    useEffect(() => {
        const fetchFollowers = async () => {
            const { data } = await getFollowers(userId)
            setFollowers(data)
            filteredFollowers = data
        }
        fetchFollowers()
    }, [openFollower, openFoModal, openFollowing])

    useEffect(() => {
        const fetchFollowing = async () => {
            const { data } = await getFollowing(userId)
            setFollowing(data)
            filteredFollowing = data
        }
        fetchFollowing()
    }, [openFollower, openFoModal, openFollowing])

    return (
        <Transition.Root show={openFoModal} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpenFoModal}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg mb-[14rem] md:mb-0 max-h-[400px] overflow-y-scroll  overflow-x-hidden ">
                                <div className="grid overflow-hidden  px-1 md:px-0 grid-cols-2 gap-2 w-4/4">
                                    <div className=' w-[100%] py-2 px-[4rem] text-center border' onClick={() => {
                                        setOpenFollower(true)
                                        setOpenFollowing(false)
                                    }}>
                                        <h3 className='font-poppins font-medium text-lg'>Followers</h3>
                                    </div>
                                    <div className='w-[100%] py-2 px-[4rem] text-center border' onClick={() => {
                                        setOpenFollowing(true)
                                        setOpenFollower(false)
                                    }} >
                                        <h3 className='font-poppins font-medium text-lg' >Following</h3>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <div>
                                        <input onChange={(e) => setQuery(e.target.value)} type="search" className="w-[100%] mb-2 outline-none margin px-2 py-1 border border-gray-300 rounded-md" placeholder="Search User...." />
                                    </div>
                                    {
                                        openFollowing ? (<div>
                                            {
                                                filteredFollowing.length ? filteredFollowing.map((user) => {
                                                    return <FollowerFollowingCard user={user} />
                                                }) : (
                                                    <div className="p-6">
                                                        <h3 className="font-poppins font-medium text-md text-center">No Users Found</h3>
                                                    </div>
                                                )
                                            }
                                        </div>) : (<div>
                                            {
                                                filteredFollowers.length ? filteredFollowers.map((user) => {
                                                    return <FollowerFollowingCard user={user} />
                                                }) : (
                                                    <div className="p-6">
                                                        <h3 className="font-poppins font-medium text-md text-center">No Users Found</h3>
                                                    </div>
                                                )
                                            }
                                        </div>)
                                    }
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        {/* <button
                            type="button"
                            className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                            onClick={() => setOpen(false)}
                            ref={cancelButtonRef}
                        >
                            Cancel
                        </button> */}
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default FollowingAndFollowerModal