import React from "react";
import { BrowserRouter, Link, Route, Navigate } from 'react-router-dom';
import Login from "./Login";

const Nav = () => {

    return (
        <nav className='navbar'>
            <h2>Threadify</h2>
            <div className='navbarRight'>
                <button ><Link to='/'>Sign out</Link> </button>
            </div>
        </nav>
    );
};

export default Nav;
