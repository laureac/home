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
          color: "green"
        }}
    >
        Home
    </NavLink>
    <NavLink
        to='/about'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "green"
        }}>
        About
    </NavLink>
    <NavLink
        to='/contact'
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "green"
        }}>
        Contact
    </NavLink>
    </div>
  );
};

export default Header;