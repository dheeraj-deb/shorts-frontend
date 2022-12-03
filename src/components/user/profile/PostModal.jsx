import moment from 'moment';
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { useEffect } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { IoMdClose } from "react-icons/io"
import { FaRegComment } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import DropDown from '../../DropDown'
import Spinner from '../../Spinner';
import Comment from '../comment/Comment'
import PostEdit from './PostEdit';

import { findPostById, savePost } from "../../../services/api/UserRequestes"

import { deletePost, likeAndDislike } from "../../../services/reducres/post/postSlice"
import { removePostFromUser } from '../../../services/reducres/user/userSlice';
import { useRef } from 'react';

function Post({ postId, user, setShowVideo }) {
    const dispatch = useDispatch()
    const [isEdit, selectIsEdit] = useState(false)
    const [edit, setEdit] = useState(false)
    const [isCommentOn, setIsCommentOn] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [post, setPost] = useState({})

    const profileCommentRef = useRef(null)

    const options = [
        {
            name: "Edit",
            fn: () => {
                selectIsEdit(true)
            },
            id: 0,
        },
        {
            name: "Delete",
            fn: (postId) => {
                setShowVideo(false)
                dispatch(deletePost(postId))
                dispatch(removePostFromUser(postId))
            },
            id: 1,
        }

    ];

    const options1 = [
        {
            name: "Save",
            fn: (id) => {
                savePost(id)
            },
            id: 0,
        },
        {
            name: "Report",
            fn: (id) => {

            },
            id: 1,
        },
    ]

    const fetchPost = async () => {
        const { data } = await findPostById(postId)
        setPost(data)
    }

    useEffect(() => {
        fetchPost()
        setIsLoading(false)
    }, [edit])


    function handleLike() {
        if (user) {
            dispatch(likeAndDislike({ postId: post._id, userId: user._id }));
            fetchPost()
        } else {
            toast("Please Login!");
        }
    }

    if (isCommentOn) {
        profileCommentRef.current.scrollTop = profileCommentRef.current.scrollHeight;
    }

    if (isEdit) {
        profileCommentRef.current.scrollTop = profileCommentRef.current.scrollHeight;
    }




    if (isLoading) {
        return <Spinner />
    }

    return (
        <div ref={profileCommentRef} className='grid grid-cols-1   overflow-hidden w-4/4 border absolute w-[60%] left-[20%] right-[20%] top-[20%] bg-white shadow-xl h-[450px] md:h-[500px] overflow-y-scroll rounded-xl transition duration-75  ease-in transition-all'>
            <div>
                <div className='w-100 flex justify-end p-2'>
                    <IoMdClose size={20} onClick={() => setShowVideo(false)} />
                </div>
                <section className="w-100 flex items-center justify-between p-2">
                    <div className="flex items-center">
                        <div className="w-[45px] h-[45px] mr-2">
                            <img
                                className="w-[100%] h-[100%] relative object-cover rounded-full"
                                src="https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2022/04/17/fleetwood-1694-patricksmith.jpg"
                                alt=""
                            />
                        </div>
                        <h4>{post?.user?.username}</h4>
                    </div>
                    {user ? <DropDown options={(post.postedBy == user?._id) ? options : options1} postId={postId} /> : null}
                </section>
                <section className="h-[200px] md:h-[300px]">
                    <video
                        controls
                        className="w-[100%] h-[100%] object-cover "
                        src={`https://shortsmedium.ml/shorts/api/stream/${post?._id}`}
                        type="video/mp4"
                        loop={true}
                        onLoad
                    />
                </section>
                <section className="w-100  px-2">
                    <h3>{post?.title}</h3>
                    <p className="text-xs">{post?.description}</p>
                </section>
                <section className="w-100  p-2 py-3">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                            {post?.likes?.includes(user?._id) ? (
                                <AiFillHeart
                                    fontSize={22}
                                    onClick={handleLike}
                                    className="mr-3 text-red-600"
                                />
                            ) : (
                                <AiOutlineHeart
                                    fontSize={22}
                                    onClick={handleLike}
                                    className="mr-3"
                                />
                            )}
                            <FaRegComment
                                fontSize={22}
                                onClick={() => setIsCommentOn(isCommentOn ? false : true)}
                            />
                        </div>
                        <FiShare2 fontSize={22} className="self-start mr-2" />
                    </div>
                    <div className="w-100 px-2">
                        <p className="text-sm text-left">{post?.likes?.length}</p>
                    </div>
                    <div>
                        <p className="text-xs font-thin mr-2 font-poppins">
                            {moment(post?.time).format("llll")}
                        </p>
                    </div>
                </section>
            </div>
            <div>
                {

                    isEdit ? (<PostEdit post={post} setIsLoading={setIsLoading} setEdit={setEdit} selectIsEdit={selectIsEdit} />) : (isCommentOn ? (<Comment postId={post._id} user={user} />) : null)
                }
            </div>
        </div>
    )
}

export default Post