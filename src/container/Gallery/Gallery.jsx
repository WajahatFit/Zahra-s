import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Gallery.css";
const galleryImages = [
  images.menu1,
  images.menu2,
  images.biryani,
  images.charsi,
  images.gajreela,
  images.kebab,
  images.salan,
  images.trifle,
  images.burger,
  images.butterChicken,
  images.halwa,
  images.karahiS,
  images.chikenTikka,
  images.kheer,
  images.pizza,
  images.swaian,
];
const Gallery = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Photo" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          Take a glimpse into the world of Zahra's with our mouth-watering photo
          gallery. From sizzling tandoori dishes to fragrant biryanis, let the
          colorful and enticing images of our cuisine transport you to India and
          Pakistan.
        </p>
        <form action="https://goo.gl/maps/aZmVaTi69ASF6GsYA">
          <button className="custom__button" type="submit" formtarget="_blank">
            View More
          </button>
        </form>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery__image-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
