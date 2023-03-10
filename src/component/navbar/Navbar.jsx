import { useState, useEffect } from "react";
import "./navbar.scss";
// import axios from "axios";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const CLIENT_ID = "f7f0a18112ba4a049ff76982cb60524f";
const CLIENT_SECRET = "c39ef23cd3a44325a91797b5779bd1f1";

const Navbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  // const [artists, setArtists] = useState([]);

  useEffect(() => {
    //API access Token
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        CLIENT_ID +
        "&client_secret=" +
        CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", authParameters)
      .then((result) => result.json())
      .then((data) => setAccessToken(data.access_token));
  }, []);

  //Search
  async function search() {
    console.log("Search for " + searchInput);

    //Get request using search to get the Artist ID
    var artistParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    var artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      artistParameters
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  // const searchArtists = async (e) => {
  //   e.preventDefault();
  //   const { data } = await axios.get("https://api.spotify.com/v1/search", {
  //     headers: {
  //       Authorization: `Bearer `,
  //     },
  //     params: {
  //       q: "searchKey",
  //       type: "artist",
  //     },
  //   });

  //   setArtists(data.artists.items);
  // };

  // const handleInputChange = (event) => {
  //   setQuery(event.target.value);
  // };

  // const handleSearch = async (event) => {
  //   event.preventDefault();
  // };

  // const response = await fetch('https:api.spotify.com/v1/search?q=$}{query}&type=artist')
  return (
    <div className="navbar">
      <form>
        <div className="search-bar">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search artist"
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => setSearchInput(event.target.value)}
            className="search"
          />
        </div>

        <a href="http://localhost:8888" className="login">
          Login to Spotify
        </a>
      </form>
    </div>
  );
};

export default Navbar;
