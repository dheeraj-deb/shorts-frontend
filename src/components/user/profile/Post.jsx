import moment from 'moment';
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
import DropDown from '../../DropDown'
import Comment from '../comment/Comment'

function Post({ post, user, setShowVideo }) {

    console.log(post);

    const options = [
        {
            name: "Report",
            fn: () => {
                console.log("here");
            },
            id: 0,
        },
    ];


    const handleLike = () => { }

    const setIsCommentOn = () => { }

    return (
        <div className='grid overflow-hidden grid-cols-2 gap-2 w-4/4 border'>
            <div className=''>
                <section className="w-100 flex items-center justify-between p-2">
                    <div className="flex items-center">
                        <div className="w-[45px] h-[45px] mr-2">
                            <img
                                className="w-[100%] h-[100%] relative object-cover rounded-full"
                                src="https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_3.0,f_auto,g_center,h_393,q_auto,w_713/v1/pgatour/editorial/2022/04/17/fleetwood-1694-patricksmith.jpg"
                                alt=""
                            />
                        </div>
                        <h4>{post?.username ? post.username : ""}</h4>
                    </div>
                    <DropDown options={options} />
                </section>
                <section className="h-[200px] md:h-[300px]">
                    <video
                        className="w-[100%] h-[100%] object-cover "
                        src={`http://localhost:4000/shorts/api/stream/${post.post._id}`}
                        type="video/mp4"
                        loop={true}
                        onLoad
                    />
                </section>
                <section className="w-100  px-2">
                    <h3>{post.post.title}</h3>
                    <p className="text-xs">{post.post.description}</p>
                </section>
                <section className="w-100  p-2 py-3">
                    <div className="flex items-center justify-between ">
                        <div className="flex items-center">
                            {post.post.likes?.includes(user?._id) ? (
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
                        <p className="text-sm text-left">{post.post.likes?.length}</p>
                    </div>
                    <div>
                        <p className="text-xs font-thin mr-2 font-poppins">
                            {moment(post.post.time).format("llll")}
                        </p>
                    </div>
                </section>
            </div>
            <div className=''>

                <Comment postId={post.post._id} user={user} />
            </div>
        </div>
    )
}

export default Post