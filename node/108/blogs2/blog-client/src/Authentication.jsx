import React from "react";
import "./Authentication.css";
import { useState } from "react";
import Logout from "./Logout";
import Login from "./Login";

export default function Authentication() {
  const [userName, setUserName] = useState();
  return (
    <div id="authentication">
      {userName ? 
        <Logout setUserName={setUserName} userName={userName} />
       :
        <Login setUserName={setUserName} />
      }
    </div>
  );
}
