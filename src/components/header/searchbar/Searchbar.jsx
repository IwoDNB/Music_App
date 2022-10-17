import react, {useState,useEffect, useContext} from 'react';
import axios from 'axios';
import User from '../user/User';
import './Searchbar.scss'
import { dataContext } from '../../../context/Context';

function Searchbar() {

  const [result, setResult] = useState();
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState([]);
  const {state, dispatch} = useContext(dataContext)


  const searchArtist = async (e)=> {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
           headers:{
             Authorization:`Bearer ${state.token}`
           },
           params:{
             q: searchKey,
             type: 'artist'
           }
   })
    dispatch({type:"SET_ARTIST", payload:data.artists.items})
 }




  return (
    <div>
      
      {state.token?
          <form className='form-searchBar' onSubmit={searchArtist}>
                <input type="text" onChange={e => setSearchKey(e.target.value)}/>
          <button type={'submit'}>Search</button>
          </form>
          : <h2>Please Login</h2>}
    </div>
  )
}

export default Searchbar