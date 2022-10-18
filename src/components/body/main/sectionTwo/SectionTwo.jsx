import React, {useState, useContext} from 'react'
import './SectionTwo.scss'
import { dataContext } from '../../../../context/Context';
import LogoImage from "../../../../img/logo.png"
import SectionOne from '../sectionOne/SectionOne';

function SectionTwo() {

const {state, dispatch} = useContext(dataContext);
const [chosenArtist, setChosenArtist] = useState();



  return (
   
   <div>
    <SectionOne  chosenArtist={chosenArtist} setChosenArtist={setChosenArtist}/>
    <div className='section-two-con'>

        <div className='title-text'>Recommended Albums</div>
        <div className='ganre-button'></div>
        <div className='music-cards-display'>
        { 
         state.artist && state.artist.map(e => (
          <div key={e.id} onClick={() => setChosenArtist(e)} className='artist-card'>
            <span>{e.name}</span>
            {e.images.length ?
           <img src={e.images[0].url} alt="" /> : <img src={LogoImage} alt="" />
            }
            
          
            </div>
          ))
         }

        </div> 
        </div>
  
    
    
    </div>
  )
}

export default SectionTwo