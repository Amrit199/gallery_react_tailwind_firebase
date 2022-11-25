import React, { useState } from "react";
import HeroCard from "./HeroCard";

const ItemCard = ({ photos }) => {
  const [model, setModel] = useState("");
  const [openModel, setOpenModel] = useState(false);

  const handleClick = (e) => {
    setModel(e.target.src);
    setOpenModel(true);
  };
  return (
    <div className="w-full h-full bg-slate-200 px-6 py-2">
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center justify-center">
        {photos &&
          photos.map((item) => (
            <img
              src={item.webformatURL}
              key={item.id}
              alt={item.tags}
              onClick={handleClick}
            ></img>
          ))}
      </div>

      <HeroCard
        open={openModel}
        close={() => setOpenModel(false)}
        model={model}
      />
    </div>
  );
};

export default ItemCard;
