import react, {useState,useEffect, useContext} from 'react';
import axios from 'axios';
import User from '../user/User';
import './Searchbar.scss'
import { dataContext } from '../../../context/Context';
import { TokenContext} from '../../../context/TokenContext'

function Searchbar() {

  const [result, setResult] = useState();
  const [searchKey, setSearchKey] = useState("");
  const {state, dispatch} = useContext(dataContext);
  const [token, setToken] = useContext(TokenContext)



  const searchArtist = async (e)=> {
    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/search", {
           headers:{
             Authorization:`Bearer ${localStorage.getItem("token")}`
           },
           params:{
             q: searchKey,
             type:'artist',
           }
   })
    dispatch({type:"SET_ARTIST", payload:data.artists.items})
 }


  return (
    <div className='searchBar-section'>
      <div className='searchBar-container'>
      {localStorage.getItem("token") &&
          <form className='form-searchBar' onSubmit={searchArtist}>
                <input placeholder='Search for Artists, Album or track' type="text" onChange={e => setSearchKey(e.target.value)}/>
          <button type={'submit'}>Search</button>
          </form>
         }
          </div>
        

    </div>
  )
}

export default Searchbar