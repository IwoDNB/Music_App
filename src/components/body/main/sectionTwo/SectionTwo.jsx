import React, {useState, useContext} from 'react'
import './SectionTwo.scss'
import { dataContext } from '../../../../context/Context';
import LogoImage from "../../../../img/logo.png"
import SectionOne from '../sectionOne/SectionOne';
import FavImage from '../../../../img/favorite.png'

function SectionTwo() {

const {state, dispatch} = useContext(dataContext);

const [condition, setCondition] = useState(true);



  return (
   
   
    
    <div className='section-two-con'>

        <div className='title-text'><h3>Recommended Artists</h3></div>
        
        <div className='music-cards-display'>
        { state.artist && state.artist.map(e => (
          <div key={e.id}  className='artist-card'>
            
            {e.images.length ?
           <img key={e.id} onClick={() => dispatch({type:"DISPLAY_ARTIST", payload:e})} src={e.images[0].url} alt="" /> : <img src={LogoImage} alt="" />
            }
              
              <span>{e.name}</span>
              <img key={e.id} onClick={() => dispatch({type:"FAV_ARTIST", payload:e})} className='card-icon' src={FavImage} alt="" />
            </div>
          ))
         }

        </div>
  
    
    
    </div>
  )
}

export default SectionTwo