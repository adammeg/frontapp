import React, { useState, useEffect } from "react";
import "../styles/nav.css";
import { ConnectWallet } from "@thirdweb-dev/react";


function Navbar() {

  /**
   * Init const
   */
  var isConnected = false

  const clear = (() => {
    localStorage.clear()
  })
  
  useEffect(() => {
    const isVerified = localStorage.getItem("token");
    console.log("isVerified", isVerified);
    if (isVerified === null){
      isConnected = false
    }else{
      isConnected = true
    }
  }, []);

  console.log("isConnected", isConnected);

  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        Mes Codes Degitaux
      </a>
      <ConnectWallet />
      {isConnected ? (
        <>
<li>
            <a href="/" onClick={clear()}  >Logout 1</a>
          </li>
        </>
      ) : (
        <>
          <li>
            <a href="/" onClick={clear()}  >Logout 2</a>
          </li>
        </>
      )}
    </nav>
  );
}

export default Navbar;