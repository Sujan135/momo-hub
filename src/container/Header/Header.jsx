import React from "react";

import images from "../../constants/images";

import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__header-info">
      <SubHeading title="Taste The New Flavour" />
      <h1 className="app__header-h1">Taste The Best MoMo's</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        The Story of Momos: What Makes This Tibetan Dumpling So Popular?{" "}
      </p>
      <input type="email" placeholder="Enter your email" />
      <button type="button">Subscribe</button>
    </div>

    <div className="app__wrapper-img">
      <img src={images.momo} alt="momo" />
    </div>
  </div>
);

export default Header;
