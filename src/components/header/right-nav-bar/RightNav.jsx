import react, { useState, useEffect, useContext } from "react";
import "./RightNav.scss";
import UserImage from "../../../img/user.png";
import LogOutImage from "../../../img/logout.png";
import ChimpImage from "../../../img/chimp.png";
import FavoriteImage from "../../../img/favorite.png";
import { TokenContext } from "../../../context/TokenContext";
function RightNav() {
  const [token, setToken] = useContext(TokenContext);

  const CLIENT_ID = "bbba81dcfa2c4799bc3cc6c936e5aff0";
  const REDIRECT_URI = "http://localhost:5173";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const logout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  return (
    <div className="right-nav">
      <div className="icon-container">
        <img src={FavoriteImage} alt="one" />
        {/* <img src={UserImage} alt="two" /> */}
        {/* <img src={LogOutImage} alt="three" /> */}

        {!token ? (
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            <img src={UserImage} alt="two" />
          </a>
        ) : (
          <div>
            <img
              src={LogOutImage}
              alt="three"
              onClick={logout}
              style={{ color: "white" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default RightNav;
