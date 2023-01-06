import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { UserAuth } from "../context/AuthContext";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState("");
  const [search, setSearch] = useState("");
  const [showtip, setShowTip] = useState(false);


  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  const showUser = () => {
    setShowTip(!showtip);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    axios
      .get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true`
      )
      .then((response) => setPhotos(response.data.hits))
      .catch((error) => console.log(error));
  },[search]);

  return (
    <div className="w-full m-auto">
      {/* navbar section, search button */}
      <div className="w-full h-[500px] relative bg-home bg-no-repeat bg-cover bg-center bg-fixed">
        <img
          src="/assets/logo.png"
          alt=""
          className="absolute top-4 left-6 w-16 rounded-lg cursor-pointer hover:opacity-80"
        />
        <div className="absolute top-4 right-6">
          <div className="flex items-center gap-3">
            <FaUserCircle
              size={35}
              onClick={showUser}
              className="cursor-pointer hover:scale-110 text-blue-500"
            />
            {showtip ? (
              <div className="flex items-center gap-3">
                {{ user } && <p className="text-xl">Welcome, {user.email}</p>}
              </div>
            ) : (
              ""
            )}
            <button
              onClick={handleSignOut}
              className="border px-3 py-1 rounded-xl bg-blue-300 font-bold hover:bg-white hover:text-black"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="w-[80%] lg:w-[50%] mx-auto h-full text-white flex flex-col items-start justify-center gap-8">
          <h1 className="text-3xl font-bold">
            The best free stock photos, royalty free images shared by creators.
          </h1>
          <div className="w-full flex items-center justify-center">
            <form onSubmit={handleSubmit} className="w-full relative">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="eg. computer, cats, mountains"
                className="px-3 py-2 rounded-lg w-full text-black"
              />
              <AiOutlineSearch
                size={30}
                onClick={handleSubmit}
                className="absolute top-[50%] right-2 transform translate-y-[-50%] cursor-pointer text-black"
              />
            </form>
          </div>
          <p className="font-bold">
            Trending: crap, landscape, beautiful, nature, car
          </p>
        </div>
      </div>

      <ItemCard photos={photos} />
    </div>
  );
};

export default Account;
