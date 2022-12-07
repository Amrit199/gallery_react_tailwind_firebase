import React, { useState } from "react";

const Searchbar = ({ searchTerm }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    searchTerm(searchText);
  };
  
  return (
    <div
      className='w-full h-24 bg-slate-200 flex items-center justify-center'
    >
      <form onSubmit={handleSubmit} className="w-[80%] md:w-[50%]">
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="eg. computer, cats, mountains"
            className="px-3 py-2 rounded-lg w-full"
          />
          <button className="text-xl font-bold px-2 py-1 bg-blue-300 rounded-lg hover:bg-white">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
