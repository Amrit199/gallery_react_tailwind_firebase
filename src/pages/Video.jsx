import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Searchbar from "../components/Searchbar";
import { UserAuth } from "../context/AuthContext";

const Video = () => {
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

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/videos/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.hits);
      })
      .catch((err) => console.log(err));
  }, [search]);

  const showUser = () => {
    setShowTip(!showtip);
    //   setShowTip(<div className="flex items-center gap-3">
    //   {{user} && <p className="text-xl">Welcome, {user.email}</p>}
    // </div>)
  };
  console.log(photos)
  return (
    <div className="w-full m-auto">
      {/* navbar section */}
      <div className="w-full px-6 py-2 flex items-center justify-between text-xl bg-slate-200">
        <div className="flex items-center gap-2">
          <div className="w-[3rem]">
            <img
              src="/assets/logo.png"
              alt=""
              className="w-full h-full rounded-lg"
            />
          </div>
          <div>
            <h1>Gallery</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaUserCircle size={35} onClick={showUser} className="cursor-pointer"/>
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
      {/* search bar section */}
      <Searchbar searchTerm={(text) => setSearch(text)} />

      <Link to={'/video'}>Videos</Link>

      {/* items section */}
      <ItemCard photos={photos}/>
    </div>
  )
}

export default Video