import React from 'react'
import "./Header.scss"
import Searchbar from './searchbar/Searchbar'

function Header() {
  return (
    <div className='header-con'>
        <Searchbar />
        
    </div>
  )
}

export default Header