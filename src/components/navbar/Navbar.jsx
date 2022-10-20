import React from "react";
import "./Navbar.scss";
import LogoImage from "../../img/logo.png";
import HomeIcon from "../../img/homee.png";
import PlayListIcon from "../../img/playlists.png";
import AccountIcon from "../../img/account.png";
import PaymentMethods from "../../img/payment.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="side-nav-con">
      <div className="logo-container">
        <Link to="/">
          <img src={LogoImage} alt="" />
        </Link>
      </div>
      <div className="menu-items-container">
        <ul>
          <div className="icon-box">
            {" "}
            <img src={HomeIcon} alt="" />{" "}
            <Link
              style={{ textDecoration: "none" }}
              className="link-nav-left"
              to="/"
            >
              <li>HOME</li>
            </Link>{" "}
          </div>
          <div className="icon-box">
            {" "}
            <img src={PlayListIcon} alt="" />{" "}
            <li className="playlists">PLAYLISTS</li>
          </div>
          <div className="icon-box">
            {" "}
            <img src={AccountIcon} alt="" />{" "}
            <li>
              <Link className="link-nav-left" to="/account">
                ACCOUNT
              </Link>
            </li>
          </div>
          <div className="icon-box">
            {" "}
            <img src={PaymentMethods} alt="" /> <li>PAYMENT</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
