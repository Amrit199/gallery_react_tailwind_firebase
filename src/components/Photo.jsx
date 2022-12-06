import React from "react";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { GrView } from "react-icons/gr";

const Photo = ({ data }) => {
  console.log(data);
  return (
    <div className="relative peer font-sans cursor-pointer transition-transform hover:scale-110 lg:hover:scale-105">
      <div className="absolute top-1 right-1">
        <div className="flex items-center justify-center gap-1">
          <div className="bg-white flex items-center p-1 rounded-xl">
            <AiOutlineHeart size={20}/>
            {data.likes}
          </div>
          <div className="bg-white flex items-center p-1 rounded-xl">
            <AiOutlineComment size={20}/>
            {data.comments}
          </div>
          <div className="bg-white flex items-center p-1 rounded-xl">
            <GrView size={20}/>
            {data.views}
          </div>
        </div>
      </div>
      <div className="absolute left-1 bottom-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center justify-center gap-2 text-white font-bold bg-black/50 rounded-2xl p-1">
            <img src={data.userImageURL} alt="" className="w-10 rounded-full" />
            {data.user}
          </div>
        </div>
      </div>
      <img src={data.webformatURL} key={data.id} alt={data.tags}></img>
    </div>
  );
};

export default Photo;
