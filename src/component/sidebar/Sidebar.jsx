import "./sidebar.scss";
import icon from "../sidebar/images-sidebar/logo.svg";
import home from "../sidebar/images-sidebar/Home.svg";
import music from "../sidebar/images-sidebar/music-library-2.svg";
import radio from "../sidebar/images-sidebar/radio.svg";
import video from "../sidebar/images-sidebar/video-horizontal.svg";
import user from "../sidebar/images-sidebar/frame.svg";
import logout from "../sidebar/images-sidebar/Logout.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top-logo">
        <img src={icon} alt="main-logo" />
      </div>

      <div className="middle-logo">
        <div className="middle-icons">
          <img src={home} alt="home" />
          <img src={music} alt="music" />
          <img src={radio} alt="radio" />
          <img src={video} alt="video" />
        </div>
      </div>

      <div className="bottom-logo">
        <div className="bottom-icons">
          <img src={user} alt="user" />
          <img src={logout} alt="rlogout" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
