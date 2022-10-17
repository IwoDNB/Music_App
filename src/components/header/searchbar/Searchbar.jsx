import React, {useState} from 'react'
import axios from 'axios';
import User from '../user/User';
import './Searchbar.scss'

function Searchbar() {

  const [result, setResult] = useState();

  

  function searchAlbum(e) {
    axios("https://api.spotify.com/v1/search", {
            headers:{
              Authorization:`Bearer ${token}`
            },
            params:{
              q: 'iron maiden',
              type: 'artist'
            }
  
    })
      .then(res=>console.log(setResult(res.data)))
      .catch(err=>console.log(err)); 
  }


  return (
    <div>
      
        <form className='form-searchBar' action="">
          <input placeholder='Search for Artist, Album' type="text" />
          <button> Search</button>
        </form>
    </div>
  )
}

export default Searchbar