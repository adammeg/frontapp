import React, { useState } from "react";
import "../styles/nav.css";
import { ConnectWallet } from "@thirdweb-dev/react";

function Navbar() {

  /**
   * Init const
   */
  const isConnected = localStorage.getItem('isConnected')
  console.log('-----', isConnected);

  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        Mes Codes Degitaux
      </a>
      <ConnectWallet />
      {
        isConnected === true && <a href="/" className="nav__brand">
          Logout
        </a>
      }

    </nav>
  );
}

export default Navbar;