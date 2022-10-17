import React, {useState} from 'react'
import axios from 'axios';
import User from '../user/User';

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
      
        <button onClick={searchAlbum}>Get album</button>
    </div>
  )
}

export default Searchbar