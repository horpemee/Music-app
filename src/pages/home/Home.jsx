import React from "react";
import "./home.scss";
import Sidebar from "../../component/sidebar/Sidebar";
import Navbar from "../../component/navbar/Navbar";
import Playlist from "../../component/playlist/Playlist";
import Playsection from "../../component/playsection/Playsection";
import { MultipleItems } from "../../component/MultipleSlider/MultipleItems";
// import Slideshow from "../../component/slider/Slideshow";
// import Playsection from "../../component/playsection/Playsection";

const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="home-container-1">
        <Navbar />
        <div className="widgets">
          <Playlist />
        </div>
        <div className="carousel">
          <MultipleItems />
        </div>
        <div className="play-section">
          <Playsection />
        </div>
      </div>
    </div>
  );
};

export default Home;
