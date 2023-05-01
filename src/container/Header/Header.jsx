import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";

import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Zahra's Signature Spice Blends</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        At Zahra's, we take pride in bringing you authentic halal cuisine that's
        bursting with flavor. Our chefs use time-honored recipes and techniques
        to create unforgettable dishes, and our secret weapon is our signature
        spice blends. Hand-crafted in our kitchen using fresh herbs, aromatic
        spices, and a pinch of magic, these blends are the key to our
        mouth-watering specialties. Come join us at Zahra's and discover the
        magic of authentic halal cuisine!
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
