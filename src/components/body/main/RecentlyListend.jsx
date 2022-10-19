import React, { useContext } from "react";
import "./RecentlyListend.scss";
import FavoriteImage from "../../../img/favorite.png";
import { dataContext } from "../../../context/Context";

function RecentlyListend() {
  const { state, dispatch } = useContext(dataContext);

  return (
    <div className="card-con-right-outer">
      <div className="card-con-right">
        <div className="fav-text">
     
          <h3>Favorite</h3>
          <img src={FavoriteImage} alt="one" />
        </div>
        
          {state.fav.length > 0 &&
            state.fav.map((ele) => (
              <div className="fav-artist-box">
              <div className="artist-img-box">
                <img src={ele.images[2].url} alt="" />
                </div>
                <div className="hero-details-con">
            {ele.name && <h3>{ele.name}</h3>}
            {ele.external_urls && (
              <a href={ele.external_urls.spotify}>Play</a>
            )}
          </div>
              
              </div>
            ))}

        
      </div>
    </div>
  );
}

export default RecentlyListend;
