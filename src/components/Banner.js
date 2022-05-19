import React from "react";
import bannerImg from "../images/banner.jpeg";

const Banner = () => {
  return (
    <>
      <img src={bannerImg} className="banner-image" alt="banner" />
      <div className="banner-bottom d-flex justify-content-center p-4">
        <p className="text-white text-center m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor ut labore et dolore magna aliqua labore et magna aliqua
          labore et dolore magna
        </p>
      </div>
    </>
  );
};

export default Banner;
