import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Account = () => {
  const { logOut, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  const userName = user.email.split("@");
  const realName = userName[0].toUpperCase();

  return (
    <div className="w-full m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">Account</h1>
      <div>
        <p>Welcome, {realName}</p>
      </div>
      <button onClick={handleSignOut} className="border py-2 px-5 mt-10">
        Logout
      </button>
    </div>
  );
};

export default Account;
