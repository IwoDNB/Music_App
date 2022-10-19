import React from 'react'
import './RecentlyListend.scss'
import FavoriteImage from "../../../img/favorite.png";


function RecentlyListend() {
  return (
    <div className='card-con-right-outer'>
      
    <div className='card-con-right'>
   <div className='fav-text'> <h3>Favorite</h3><img src={FavoriteImage} alt="one" /></div>
      </div>
    </div>
      
  )
}

export default RecentlyListend