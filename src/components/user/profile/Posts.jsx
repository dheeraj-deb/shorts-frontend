import React, { useEffect, useState } from 'react'
import axios from '../../../util/Axios';
import Post from "./Post"
import { Spinner } from "../index"


function Posts({ user }) {
    const [Loading, setIsLoading] = useState(true)
    const [videos, setVideos] = useState([]);
    const [showVideo, setShowVideo] = useState({ status: false, videoId: "" })

    const fetchUserPosts = async () => {
        const { data } = await axios.get(`/user/posts/${user._id}`);
        setVideos(data.posts);
    };

    useEffect(() => {
        fetchUserPosts();
        setIsLoading(false)
    }, [showVideo.status]);

    const handleDetailView = (videoId) => {
        setShowVideo({ ...showVideo, status: true, videoId })
    }

    if (Loading) {
        return <Spinner />
    }

    return (
        <div className='w-100 mb-28 mt-2'>
            {
                !showVideo.status ? (
                    <div className='grid overflow-hidden grid-cols-2 md:grid-cols-3 gap-2 w-4/4'>
                        {
                            videos?.map((video) => {
                                return (
                                    <div key={video.post._id} className="relative">
                                        <video src={`http://localhost:4000/shorts/api/stream/${video.post._id}`} onClick={() => handleDetailView(video.post._id)} />
                                        <p className='font-poppins absolute bottom-1 right-1 text-gray-300 font-medium text-xs'>{video.post.likes.length} likes</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                ) : (
                    <Post postId={showVideo.videoId} user={user} setShowVideo={setShowVideo} />)
            }
        </div>
    )
}
export default Posts