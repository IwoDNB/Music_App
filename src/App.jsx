import react, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./style/App.scss";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/body/main/Main";
import { TokenContext } from "./context/TokenContext";
import { dataContext } from "./context/Context";
import Player from "./components/body/footer_player/Player";
import LogOutImage from "./img/logout.png";

function App() {
  // const { state, dispatch } = useContext(dataContext);
  // const [token, setToken] = useContext(TokenContext);

  // const CLIENT_ID = "bbba81dcfa2c4799bc3cc6c936e5aff0";
  // const REDIRECT_URI = "http://localhost:5173";
  // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  // const RESPONSE_TYPE = "token";

  // const logout = () => {
  //   setToken("");
  //   window.localStorage.removeItem("token");
  // };

  return (
    <div className="App">
      <Navbar />
      <Main />

      {/* <div className="App-header">
        <h1>Spotify React</h1>
        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        ) : (
          <div>
            <button onClick={logout}>Logout</button>
            <img
              src={LogOutImage}
              alt="three"
              onClick={logout}
              style={{ color: "white" }}
            />
          </div>
        )}
      </div> */}
    </div>
  );
}

export default App;
