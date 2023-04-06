import React, { useState } from "react";
import "../styles/nav.css";
import { ConnectWallet } from "@thirdweb-dev/react";

function Navbar() {

  /**
   * Init const
   */

  return (
    <nav className="nav">
      <a href="/" className="nav__brand">
        Mes Codes Degitaux
      </a>
      <ConnectWallet />

    </nav>
  );
}

export default Navbar;