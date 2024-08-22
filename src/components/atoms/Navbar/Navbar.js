import React from 'react';
import './Navbar.css';
import Logo from "../../../assets/tectoniclogo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
    </nav>
  );
};

export default Navbar;
