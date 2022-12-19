import React, { useEffect, useState } from 'react'
import axios from '../../../util/Axios';
import PostModal from "./PostModal"
import { Spinner } from "../index"
import { STREAM_API } from "../../../config"

function Posts({ user }) {
    const [isLoading, setIsLoading] = useState(true)
    const [videos, setVideos] = useState([]);
    const [showVideo, setShowVideo] = useState({ status: false, videoId: "" })

    const fetchUserPosts = async () => {
        const { data } = await axios.get(`/user/posts/${user._id}`);
        console.log(data);
        setVideos(data.posts);
    };

    useEffect(() => {
        fetchUserPosts();
        setIsLoading(false)
        return (() => {
            setVideos([])
        })
    }, [showVideo.status]);

    const handleDetailView = (videoId) => {
        setShowVideo({ ...showVideo, status: true, videoId })
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className='w-100 mb-28 mt-2 '>
            {
                !showVideo.status ? (
                    <div className='grid overflow-hidden grid-cols-1 px-1 md:px-0 md:grid-cols-3 gap-2 w-4/4'>
                        {
                            videos?.map((video) => {
                                return (
                                    <div key={video.post._id} className="relative">
                                        <video src={`${STREAM_API}${video.post._id}`} onClick={() => handleDetailView(video.post._id)} />
                                        <p className='font-poppins absolute bottom-1 right-1 text-gray-300 font-medium text-xs'>{video.post.likes.length} likes</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <PostModal postId={showVideo.videoId} user={user} setShowVideo={setShowVideo} />)

            }
        </div>
    )
}
export default Posts