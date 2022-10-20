import React, {useState, useContext} from 'react'
import './SectionTwo.scss'
import { dataContext } from '../../../../context/Context';
import LogoImage from "../../../../img/logo.png"
import SectionOne from '../sectionOne/SectionOne';
import {AiOutlineStar} from 'react-icons/ai'
function SectionTwo() {
  const {state, dispatch} = useContext(dataContext);
  return (
    <div className='section-two-con'>
        <div className='title-text'><h3>Recommended Artists</h3></div>
        <div className='music-cards-display'>
        { state.artist && state.artist.map(e => (
          <div key={"artist_two_" + e.id} className='artist-card'>
            {e.images.length ?
           <img onClick={() => dispatch({type:"DISPLAY_ARTIST", payload:e})} src={e.images[0].url} alt="" /> : <img src={LogoImage} alt="" />
            }
              <span>{e.name}</span>
              <AiOutlineStar className={e.fav? "card-icon yellow" : "card-icon"} onClick={() => {
                dispatch({type:"FAV_ARTIST", payload:e})
              }}/>
            </div>
          ))
         }
        </div>
    </div>
  )
}
export default SectionTwo