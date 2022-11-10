import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";

function App() {



  
 
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/account"
            element={
              <Protected>
                <Account />
              </Protected>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
