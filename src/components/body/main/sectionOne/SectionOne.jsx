import React, { useState, useContext } from "react";
import "./SectionOne.scss";
import RecentlyListend from "../RecentlyListend";
import { dataContext } from "../../../../context/Context";
import ShareImage from "../../../../img/share.png";
import VinylImage from "../../../../img/vinylHead2.png";

function SectionOne() {
  const { state, dispatch } = useContext(dataContext);

  return (
    <div className="section-one-con">

      {/* loading display */}
      <div className="loading-display">
        <div className="loading-text">
          {!state.display.images && (
            <h1>
              Discover amazing new music and directly support artist who make
              it!
            </h1>
          )}
          {!state.display.images && (
            <div className="button-container">
              <button>LEARN MORE</button> <img src={ShareImage} alt="" />
            </div>
          )}
        </div>
        {!state.display.images && (
          <img className="vinyl-img" src={VinylImage} alt="" />
        )}
      </div>


      {/* CARD DISPLAY */}

      <div className="hero-display">
        <div className="img-con">
          {state.display.images && (
            <div className="artist-img-box">
               <img src={state.display.images[1].url} alt="" />
            </div>
          )}
        </div>
        <div className="hero-details-con">
          {state.display.name && <p>PLAYLIST</p>}
          {state.display.name && <h1>{state.display.name}</h1>}

          {state.display.name && <div className="genre-box">
          {state.display.name && <h2>GENRE:</h2>}
          {state.display.name && <p>{state.display.genres[0]}</p>}
          {state.display.name && <p>{state.display.genres[1]}</p>}
          {state.display.name && <p>{state.display.genres[2]}</p>}
          </div>}

          {state.display.name && <div className="followers-box">
          {state.display.followers && <h2>FOLLOWERS:</h2>}
          {state.display.followers && <p>{state.display.followers.total}</p>}
          </div>}

          {state.display.name && <div className="play-song-box">
          {state.display.followers && <h2>PLAY ON SPOTYFI:</h2>}
          {state.display.external_urls && (
            <a href={state.display.external_urls.spotify}>Play</a>
          )}
          </div>}

        </div>
      </div>
      <RecentlyListend />
    </div>
  );
}

export default SectionOne;
