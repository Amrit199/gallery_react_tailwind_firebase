import React from 'react'

const VideoCard = ({data}) => {
    console.log(data.videos);
  return (
    <div className="relative peer font-sans cursor-pointer">
      <div className="absolute top-2 left-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-2 text-white font-bold bg-black/50 rounded-2xl p-1 transition-transform hover:scale-110 lg:hover:scale-x-110">
            <img src={data.userImageURL} alt="" className="w-10 rounded-full" />
            {data.user}
          </div>
        </div>
      </div>
      <video src={data.videos.large.url} controls></video>
    </div>
  )
}

export default VideoCard