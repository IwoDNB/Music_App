import React from 'react'
import "./Navbar.scss"

function Navbar() {
  return (
    <div className='side-nav'>
      <div className='logo-container'>
        <h3>Logo</h3>
        </div>
        <div className='menu-items-container'>
          <ul>
            <li>Home</li>
            <li>Playlists</li>
            <li>Account</li>
            <li>Payment Methods</li>
          
          </ul>
        </div>
    </div>
    
  )
}

export default Navbar