import React, {useState, useContext} from 'react'
import './SectionTwo.scss'
import { dataContext } from '../../../../context/Context';
import LogoImage from "../../../../img/logo.png"
import SectionOne from '../sectionOne/SectionOne';
import FavImage from '../../../../img/favorite.png'

function SectionTwo() {

const {state, dispatch} = useContext(dataContext);



  return (
   
   
    
    <div className='section-two-con'>

        <div className='title-text'><h3>Recommended Albums</h3></div>
        <div className='ganre-button'></div>
        <div className='music-cards-display'>
        { state.artist && state.artist.map(e => (
          <div key={e.id} onClick={() => dispatch({type:"DISPLAY_ARTIST", payload:e})} className='artist-card'>
            
            {e.images.length ?
           <img src={e.images[0].url} alt="" /> : <img src={LogoImage} alt="" />
            }
              
              <span>{e.name}</span>
              <img className='card-icon' src={FavImage} alt="" />
            </div>
          ))
         }

        </div>
  
    
    
    </div>
  )
}

export default SectionTwo