import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./FindUs.css";

const FindUs = () => (
  <frameElement>
    <div className=" app__wrapper section__padding" id="contact">
      <div className="app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          Find Us
        </h1>

        <div className="app__wrapper-content">
          <p className="p__opensans">
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
          </p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Opening Hours
          </p>
          <p
            className="p__opensans"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Mon - Fri: 10:00 am - 02:00 am
          </p>
          <p
            className="p__opensans"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Sat - Sun: 10:00 am - 03:00 am
          </p>
          <button
            type="button"
            className="custom__button"
            style={{ marginTop: "2rem" }}
          >
            Visit Us
          </button>
          <h1 className="headtext__opensans" style={{ marginTop: "3rem" }}>
            Contact Us
          </h1>
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
    <div className="footer">
      <p
        className="p__opensans"
        style={{
          color: "var(--color-black)",
          fontSize: "1.2em",
          margin: "2rem 0",
        }}
      >
        @2021 MoMo's. All Rights reserved.
      </p>
    </div>
  </frameElement>
);

export default FindUs;
