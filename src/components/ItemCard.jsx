import React, { useState } from "react";
import HeroCard from "./HeroCard";
import Photo from "./Photo";

const ItemCard = ({ photos }) => {
  const [model, setModel] = useState("");
  const [openModel, setOpenModel] = useState(false);

  const handleClick = (e) => {
    setModel(e.target.src);
    setOpenModel(true);
  };
  return (
    <div className="w-full h-full bg-slate-200 py-6 px-4">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center">
        {photos &&
          photos.map((item) => (
            <Photo data={item}/>
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
