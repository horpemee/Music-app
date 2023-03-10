import React from "react";
import "./playsection.scss";
import pause from "../../component/playsection/play-images/Frame 7.svg";
import next from "../../component/playsection/play-images/next.svg";
import repeat from "../../component/playsection/play-images/repeate-one.svg";

import previous from "../../component/playsection/play-images/previous.svg";
import shuffle2 from "../../component/playsection/play-images/shuffle.svg";
import artist from "../../component/playsection/play-images/Rectangle 21.svg";
import vol from "../../component/playsection/play-images/volume-high.svg";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

const Playsection = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="artist-info">
          <img src={artist} alt="artist" />
          <div className="song-title">
            <p className="title">Seasons in</p>
            <p className="name">James</p>
          </div>
        </div>

        <div className="icon-container">
          <div className="music-icons">
            <img src={shuffle2} alt="shuff" />
            <img src={previous} alt="prev" />
            <img src={pause} alt="pause" />
            <img src={next} alt="next" />
            <img src={repeat} alt="repeat" />
          </div>

          <div className="icons">
            <img src={vol} alt="vol" className="icon" />
            <div className="volume">
              <Box>
                <LinearProgress key={3} variant="determinate" value={8} />
              </Box>
            </div>
          </div>
        </div>
      </div>

      <div className="progress">
        <Box>
          <LinearProgress
            key={3}
            variant="determinate"
            value={15}
            className="pro"
          />
        </Box>
      </div>
    </div>
  );
};

export default Playsection;
