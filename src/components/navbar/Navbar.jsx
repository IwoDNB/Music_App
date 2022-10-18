import React from 'react'
import "./Navbar.scss"
import LogoImage from "../../img/logo.png"

function Navbar() {
  return (
    <div className='side-nav'>
      <div className='side-nav-con'>
      <div className='logo-container'>
        <img src={LogoImage} alt="" />
        </div>
        <div className='menu-items-container'>
          <ul>
            <li className='home'>HOME</li>
            <li className='playlists'>PLAYLISTS</li>
            <li>Account</li>
            <li>Payment Methods</li>
          
          </ul>
        </div>
    </div>
    </div>
    
  )
}

export default Navbar