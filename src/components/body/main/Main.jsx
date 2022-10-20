import React,{useState} from 'react'
import RecentlyListend from './RecentlyListend'
import './Main.scss'
import Header from '../../header/Header'
import SectionOne from './sectionOne/SectionOne'
import SectionTwo from './sectionTwo/SectionTwo'
import { Router } from 'react-router-dom'

function Main() {
  
  
  
  return (
    <div className='main-container'>
      <Header />
      <SectionOne />
      <SectionTwo />
      
       {/* <div className='text-con'>
          <h1>Discover amazing new music and directly support artist who make it!</h1>
           <div className='button-container'>
               <button>Learn more</button> <p>icon</p>
            </div>
      </div> */}

        
        
    </div>
  )
}

export default Main