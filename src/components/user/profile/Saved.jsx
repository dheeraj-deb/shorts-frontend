import React, { useEffect, useState } from 'react'
import axios from "../../../util/Axios"
import Spinner from '../../Spinner';
import PostModal from "./PostModal"

function Saved({ user }) {
  const [isLoading, setIsLoading] = useState(true)
  const [videos, setVideos] = useState([]);
  const [showVideo, setShowVideo] = useState({ status: false, videoId: "" })

  const fetchSavedPost = async () => {
    const { data } = await axios.get(`/saved-post`);
    console.log("dddddd", data);
    setVideos(data);
  };

  useEffect(() => {
    fetchSavedPost();
    setIsLoading(false)
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
                console.log("videeeeee", video);
                return (
                  <div key={video.saved._id} className="relative">
                    <video src={`http://localhost:4000/shorts/api/stream/${video.saved._id}`} onClick={() => handleDetailView(video?.saved?._id)} />
                    <p className='font-poppins absolute bottom-1 right-1 text-gray-300 font-medium text-xs'>{video?.saved?.likes?.length} likes</p>
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


export default Saved