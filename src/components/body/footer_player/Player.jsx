import React, { forwardRef } from "react";
import "./Player.scss";
import ForwardImg from "../../../img/forward.png";
import PreviousImg from "../../../img/previous.png";
import PlayImg from "../../../img/play.png";
import PlayBar from "../../../img/playBar.png";

function Player() {
  return (
    <div className="player-container">
      <div className="player-main">
        <div className="buttons-con">
          <img src={PreviousImg} alt="" />
          <img className="play-img" src={PlayImg} alt="" />
          <img src={ForwardImg} alt="" />
        </div>
        <div className="bar-con">
          <p>0:00</p> <img src={PlayBar} alt="" /> <p>0:00</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
