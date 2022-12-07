import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const HeroCard = ({ open, close, model }) => {
  console.log(model.webformatURL)
  if (!open) return null;
  return (
    <div>
      {model && (
        <div
          className="fixed top-0 right-0 w-full h-screen bg-black/80"
          onClick={close}
        >
          <AiOutlineClose
            size={35}
            className="absolute bg-white/90 rounded-xl top-1 right-1 lg:top-3 lg:right-3 cursor-pointer transition-transform text-red-700 hover:scale-110"
            onClick={close}
          />
          <img
            src={model.webformatURL}
            alt="hero images"
            className="w-[90%] sm:w-[90%] lg:w-[60%] h-full pt-10 pb-4 mx-auto object-cover"
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
