import React from "react";
// import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="app__gallery flex__center section__padding" id="blog">
      <div className="app__gallery-info">
        <h1 className="headtext__cormorant"> Photo Gallery</h1>
        <p className="p__opensans">Here Are Some Varietie Of Momo's</p>
      </div>
      <div
        className="headtext__cormorant"
        style={{ fontSize: "60px", color: "black" }}
      >
        varieties
      </div>
      <div className="app__gallery-varieties">
        <div className="app__gallery-veg ">
          <h1>Veg Momo Photo</h1>
          <div
            className="app__img"
            style={{ fontSize: "200px", marginTop: "2rem" }}
          >
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
          </div>
        </div>
        <div className="app__gallery-chicken">
          <h1>Chicken Momo Photo</h1>
          <div
            className="app__img"
            style={{ fontSize: "200px", marginTop: "2rem" }}
          >
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
            <img src={images.momo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
