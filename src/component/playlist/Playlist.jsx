import "./playlist.scss";
import Pic from "../playlist/images-playlist/Pexels Photo by Eric Esma.png";

import drop from "../playlist/images-playlist/Vector (7).svg";
import love from "../playlist/images-playlist/Stroke-1.svg";
import gold from "../playlist/images-playlist/Rectangle 17 (4).svg";
import tune from "../playlist/images-playlist/Rectangle 17 (5).svg";
import chartLogo from "../playlist/images-playlist/Rectangle 17.svg";

const Playlist = () => {
  const musicLists = [
    {
      id: 1,
      img: gold,
      genre: "Golden age of 80s",
      name: "Sean swadder",
      time: "2:34:45",
    },
    {
      id: 2,
      img: chartLogo,
      genre: "Reggae 'n' blues",
      name: "Dj YK mule",
      time: "1:02:42",
    },
    {
      id: 3,
      img: tune,
      genre: "Tomorrow's tunes",
      name: "Obi Datti",
      time: "2:01:25",
    },
  ];
  return (
    <div className="playlist">
      <div className="playlist-container">
        <div className="left">
          <div className="l-R">
            <p className="theme">Curated playlist</p>

            <div className="category">
              <p className="r-b">R & B Hits</p>
              <p className="r-b-s">
                All mine, Lie again, Petty call me everyday, Out of time, No
                love, Bad habit, and so much more
              </p>
            </div>
          </div>

          <div className="r-L">
            <img src={drop} alt="pics" className="backdrop" />;
            <img src={Pic} alt="pics" className="pics" />
          </div>
        </div>
        <div className="right">
          <div className="chart-title">
            <p>Top Charts</p>
          </div>
          <div className="charts-boxes">
            {musicLists.map((musicList) => (
              <div className="box1">
                <img src={musicList.img} alt="1" className="logo" />
                <div className="titles">
                  <h2 title="box-title1" className="play-list">
                    {musicList.genre}
                  </h2>
                  <h6 title="box-name" className="name">
                    {musicList.name}
                  </h6>
                  <h4 title="time" className="time">
                    {musicList.time}
                  </h4>
                </div>
                <img src={love} alt="love" className="love" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
