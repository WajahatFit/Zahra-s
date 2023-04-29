import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantenu } from "react-icons/md";
import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => (
  <nav className="app__navbar">
    <div className="app__navbar-logo">
      <h1 className="app__navbar-heading">ZAHRA'S</h1>
    </div>
    <ul className="app__navbar-links">
      <li className="p__opensans">
        <a href="#home">home</a>
      </li>
      <li className="p__opensans">
        <a href="#about">about</a>
      </li>
      <li className="p__opensans">
        <a href="#menu">menu</a>
      </li>
      <li className="p__opensans">
        <a href="#contact">contact</a>
      </li>
    </ul>
    <div className="app__navbar-login">
      <a href="#login" className="p__opensans">
        Log In / Register
      </a>
      <div />
      <a href="/" className="p__opensans">
        Book Table
      </a>
    </div>
  </nav>
);

export default Navbar;
