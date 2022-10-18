import React from 'react'
import "./Header.scss"
import Searchbar from './searchbar/Searchbar'
import RightNav from './right-nav-bar/RightNav'

function Header() {
  return (
    <div className='header-con'>
        <Searchbar />
        <RightNav />
        
    </div>
  )
}

export default Header