import React,{useState, useContext} from 'react'
import './SectionOne.scss'
import RecentlyListend from '../RecentlyListend'
import { dataContext } from '../../../../context/Context';

function SectionOne({chosenArtist,setChosenArtist}) {

const {state, dispatch} = useContext(dataContext);


  return (
    <div className='section-one-con'>
        <div className='hero-display'>
              <div className='text-con'>
           {
            chosenArtist.artist.map(e => (
              <span>{e.name}</span>
            ))
           }


          {/* <h1>Discover amazing new music and directly support artist who make it!</h1> */}
           {/* <div className='button-container'>
               <button>Learn more</button> <p>icon</p>
            </div> */}
      </div>
      
        </div>
        <RecentlyListend />
    </div>
  )
}

export default SectionOne