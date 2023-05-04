import React from "react";

import { FooterOverlay, Newsletter } from "../../components";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";

import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          283 Oldbury Rd, Rowley Regis, B65 0PR, Birmingham, UK
        </p>
        <p
          href="tel:+447375229107"
          className="p__opensans app__footer-contact_link"
        >
          Call Us
        </p>
        <p
          className="p__opensans app__footer-contact_link"
          onClick={() =>
            (window.location = "mailto:zahrafoodfactory@gmail.com")
          }
        >
          Email Us
        </p>
      </div>
      <div className="app__footer-links_logo">
        <h2 className="headtext">Zahra's</h2>
        <p className="p__opensans">
          Spice Up Your Life with Authentic Halal Cuisine
        </p>
        <img src={images.spoon} alt="spoon" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiInstagram />
          <FiTwitter />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">1:00 pm - 11:00 pm</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">10:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Zahra's. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
