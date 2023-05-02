import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="#about"
  >
    <div className="app__aboutus-overlay flex__center">
      <h2 className="app__aboutus-letter">Z</h2>
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          At Zahra's, we are passionate about bringing the authentic flavors of
          South Asian cuisine to your table. Our chefs have years of experience
          in crafting exquisite dishes that capture the essence of our culinary
          traditions. From the bold and spicy curries to the fragrant biryanis,
          every dish is a celebration of flavor and culture. Come join us and
          experience the true taste of South Asian cuisine.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Zahra's has been a beloved part of the community since it first opened
          its doors 5 years ago. Our restaurant was founded on a simple but
          powerful principle: to share the rich and vibrant flavors of South
          Asian cuisine with the world. Our dedicated chefs have spent years
          perfecting their craft and have passed down their culinary expertise
          from generation to generation. Whether you're a longtime fan or a
          first-time visitor, we invite you to join us on a journey of taste and
          culture at Zahra's.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
