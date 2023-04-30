import React from "react";
import { subHeading } from "../../components/SubHeading";

import images from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper seection__padding" id="home">
    <div className="app__wrapper_info">
      <subHeading />
    </div>
    <div className="app__wrapper_image"></div>
  </div>
);

export default Header;
