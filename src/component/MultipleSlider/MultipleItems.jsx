// import React, { Component } from "react";
// import Navbar from "../navbar/Navbar";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import "./multipleitems.css";
import { Imgslider } from "../slider/imgslider";

export const MultipleItems = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  // const renderArtists = ({ artists, setArtists }) => {
  return (
    <div className="outeer">
      <h2 className="title">New releases. </h2>

      <Slider className="outer" {...settings}>
        {Imgslider.map((e) => (
          <div className="slide-img">
            <img src={e.imgsrc} alt={e.title} className="ocean" key={e.id} />
            <p className="slide-title">{e.title}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
  // };
  // {
  //   renderArtists();
  // }
};
