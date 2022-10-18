import React from 'react'
import "./RightNav.scss"
import UserImage from '../../../img/user.png'
import LogOutImage from '../../../img/logout.png'
import ChimpImage from '../../../img/chimp.png'
import FavoriteImage from '../../../img/favorite.png'


function RightNav() {
  return (
    <div className='right-nav'>
      <div className='icon-container'>
      <img src={FavoriteImage} alt="one" />
      <img src={UserImage} alt="two" />
      <img src={LogOutImage} alt="three" />
      </div>
        
    </div>
  )
}

export default RightNav