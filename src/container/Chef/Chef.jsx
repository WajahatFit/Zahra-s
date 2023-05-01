import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we belive in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            At Zahra's, we are passionate about crafting dishes that showcase
            the vibrant and complex flavors of Indian & Pakistani cuisine.
          </p>
        </div>
        <p className="p__opensans">
          We believe that the secret to great food lies in the ingredients and
          the techniques used to prepare them. That's why we use only the
          freshest and highest quality ingredients available, sourced locally
          whenever possible. We also take great care to ensure that our dishes
          are prepared using traditional methods that have been passed down
          through generations of chefs. From the aromatic spices to the tender
          meats and flavorful vegetables, every element of our dishes is
          carefully chosen and prepared to create a harmonious and memorable
          dining experience. Come join us and experience the true taste of
          Indian & Pakistani cuisine at Zahra's.
        </p>
      </div>
    </div>
  </div>
);

export default Chef;
