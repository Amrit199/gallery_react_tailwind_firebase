import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import Searchbar from "../components/Searchbar";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();
  const [photos, setPhotos] = useState("");
  const [search, setSearch] = useState("");

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
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${search}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.hits);
      })
      .catch((err) => console.log(err));
  }, [search]);

  console.log(search);

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
          {user && <p className="text-xl">Welcome, {user.email}</p>}
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

      {/* items section */}
      <ItemCard photos={photos} />
    </div>
  );
};

export default Account;
