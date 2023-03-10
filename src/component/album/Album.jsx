import React from "react";
import "./album.scss";
import play from "./album-images/Play.svg";
import collection from "./album-images/music-square-add.svg";
import heart from "./album-images/Heart.svg";
import music from "./album-images/Lead-image.svg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Album = () => {
  return (
    <div className="navbar1">
      <div className="search-bar">
        <SearchOutlinedIcon />

        <input type="text" placeholder="Search artist" className="search" />
      </div>
      <div className="music-category">
        <div className="music">
          <img src={music} alt="music" />
        </div>

        <div className="category">
          <div className="category-title">
            <h2>Tomorrow's Tunes</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet
              <br /> luctus venenatis
            </p>
            <p>64 songs ~ 16 hrs+</p>
          </div>

          <div className="icons">
            <div className="play">
              <img src={play} alt="play" />
              <span>Play all</span>
            </div>
            <div className="collection">
              <img src={collection} alt="collect" />
              <span>Add to collection</span>
            </div>
            <div className="heart">
              <img src={heart} alt="heart" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Album;
