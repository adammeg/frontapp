import React, { useState, useEffect } from "react";
import "../styles/nav.css";
import { ConnectWallet } from "@thirdweb-dev/react";


function Navbar() {

  /**
   * Init const
   */
  const [isConnected, setIsConnected] = useState(false)

  useEffect(() => {
    const isVerified = localStorage.getItem("isVerified");
    console.log("isVerified", isVerified);
    setIsConnected(Boolean(isVerified));
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
            
          </>
        ) : (
          <>
          <li>
              <button>Logout</button>
            </li>
          </>
        )}
    </nav>
  );
}

export default Navbar;