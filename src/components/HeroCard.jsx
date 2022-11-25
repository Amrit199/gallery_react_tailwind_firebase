import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const HeroCard = ({ open, close, model }) => {

  if (!open) return null;
  return (
    <div>
      {model && (
        <div
          className="fixed top-0 right-0 w-full h-screen bg-black/80 p-6"
          onClick={close}
        >
          <AiOutlineClose
            size={50}
            className="absolute top-3 right-3 cursor-pointer text-green-300 hover:text-red-300"
            onClick={close}
          />
          <img
            src={model}
            className="w-[60%] sm:w-[60%] lg:w-[50%] h-[40%] sm:h-[60%] md:h-[80%] mx-auto my-5 sm:my-10"
            onClick={(e) => {
              e.stopPropagation();
            }}
          ></img>
        </div>
      )}
    </div>
  );
};

export default HeroCard;
