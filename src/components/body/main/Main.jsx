import React from 'react'
import RecentlyListend from './RecentlyListend'
import './Main.scss'

function Main() {
  return (
    <div className='main-container'>
        <div className='text-con'>
            <h1>Hello dummy text bla bla bla</h1>
            <div className='button-container'>
                <button>Learn more</button> <p>icon</p>
            </div>
        </div>

        <RecentlyListend />
        
    </div>
  )
}

export default Main