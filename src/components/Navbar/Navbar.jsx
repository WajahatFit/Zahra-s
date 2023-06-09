import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToogleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1 className="app__navbar-heading headtext">ZAHRA'S</h1>
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
          <a href="#location">Location</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Welcome
        </a>
        <div />
        <a href="#contact" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToogleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToogleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
