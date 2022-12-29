import React from "react";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import { GrView } from "react-icons/gr";

const Photo = ({ data,  modelimg, modelset }) => {
  // const [model, setModel] = useState("");
  // const [openModel, setOpenModel] = useState(false);

  const handleClick = (e) => {
    e.preventDefault()
    modelimg(data)
    modelset(true)
    // setOpenModel(true);
  }
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
      <img src={data.webformatURL} key={data.id} alt={data.tags} onClick={handleClick} className="w-full rounded-t-2xl"></img>
      <div className="bg-blue-300 font-bold px-2 rounded-b-3xl">
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-1 p-1 rounded-xl">
            <AiOutlineHeart size={25}/>
            {data.likes}
          </div>
          <div className="flex items-center p-1 gap-1 rounded-xl">
            <AiOutlineComment size={25}/>
            {data.comments}
          </div>
          <div className="flex items-center p-1 gap-1 rounded-xl">
            <GrView size={25}/>
            {data.views}
          </div>
        </div>
        <div className="w-full h-[1px] bg-black my-1"></div>
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-1 p-1 rounded-xl transition-transform ease-in hover:scale-110 lg:hover:scale-125">
            Like
          </div>
          <div className="flex items-center p-1 gap-1 rounded-xl transition-transform hover:scale-110 lg:hover:scale-125">
            Download
          </div>
          <div className="flex items-center p-1 gap-1 rounded-xl transition-transform hover:scale-110 lg:hover:scale-125">
            Share
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
