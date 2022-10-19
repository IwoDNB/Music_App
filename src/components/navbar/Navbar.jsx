import React from 'react'
import "./Navbar.scss"
import LogoImage from "../../img/logo.png"
import HomeIcon from '../../img/homee.png'
import PlayListIcon from '../../img/playlists.png'
import AccountIcon from '../../img/account.png'
import PaymentMethods from '../../img/payment.png'


function Navbar() {
  return (
    
      <div className='side-nav-con'>
      <div className='logo-container'>
        <img src={LogoImage} alt="" />
        </div>
        <div className='menu-items-container'>
          <ul>
          <div className='icon-box'> <img src={HomeIcon} alt="" />  <li className='home'>HOME</li></div>
          <div className='icon-box'> <img src={PlayListIcon} alt="" /> <li className='playlists'>PLAYLISTS</li></div>
          <div className='icon-box'> <img src={AccountIcon} alt="" />  <li>ACCOUNT</li></div>
          <div className='icon-box'> <img src={PaymentMethods} alt=""/> <li>PAYMENT</li></div>
          
          </ul>
        </div>
   
    </div>
    
  )
}

export default Navbar