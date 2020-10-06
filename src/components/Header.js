import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className='header'>
    <NavLink 
        to='/home' 
        exact 
        activeStyle={{
          fontWeight: "bold",
          color: "#E2C4A5"
        }}
    >
        Home
    </NavLink>
    <NavLink
        to='/about'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "#E2C4A5"
        }}>
        About
    </NavLink>
    <NavLink
        to='/contact'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "#E2C4A5"
        }}>
        Contact
    </NavLink>
    </div>
  );
};

export default Header;