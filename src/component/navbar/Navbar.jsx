// import { useState, useEffect } from "react";
import "./navbar.scss";
// import axios from "axios";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Navbar = () => {
  // const [searchInput, setSearchInput] = useState("");
  // const [accessToken, setAccessToken] = useState("");
  // const [artists, setArtists] = useState([]);

  // useEffect(() => {
  //   //API access Token
  //   var authParameters = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body:
  //       "grant_type=client_credentials&client_id=" +
  //       CLIENT_ID +
  //       "&client_secret=" +
  //       CLIENT_SECRET,
  //   };

  //   fetch("https://accounts.spotify.com/api/token", authParameters)
  //     .then((result) => result.json())
  //     .then((data) => setAccessToken(data.access_token));
  // }, []);

  // //Search
  // async function search() {
  //   console.log("Search for " + searchInput);

  //   // Get request using search to get the Artist ID
  //   var searchParameters = {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + accessToken,
  //     },
  //   };

  //   var artistID = await fetch(
  //     "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
  //     searchParameters
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return data.artists.items[0].id;
  //     });
  //   console.log("Artist ID is " + artistID);

  //   var albums = await fetch(
  //     "https://api.spotify.com/v1/artists/" +
  //       artistID +
  //       "/albums" +
  //       "?include_groups=album&market=US&limit=50",
  //     searchParameters
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  return (
    <div className="navbar">
      <form>
        <div className="search-bar">
          <SearchOutlinedIcon />
          <input
            type="text"
            placeholder="Search artist"
            // onKeyPress={(event) => {
            //   if (event.key === "Enter") {
            //     search();
            //   }
            // }}
            // onChange={(event) => setSearchInput(event.target.value)}
            // className="search"
          />
        </div>

        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          className="login"
        >
          Login to Spotify
        </a>
      </form>
    </div>
  );
};

export default Navbar;
