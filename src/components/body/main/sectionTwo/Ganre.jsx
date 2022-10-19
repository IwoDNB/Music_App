import react, {useState,useEffect, useContext} from 'react';
import axios from 'axios';
import { dataContext } from '../../../../context/Context';
import { TokenContext} from '../../../../context/TokenContext'

function Ganre() {

  const [result, setResult] = useState();
  const [searchKey, setSearchKey] = useState("");
  const {state, dispatch} = useContext(dataContext);
  const [token, setToken] = useContext(TokenContext)

  const searchGenre = async (e)=> {

    e.preventDefault()
    const {data} = await axios.get("https://api.spotify.com/v1/recommendations/available-genre-seeds", {
           headers:{
             Authorization:`Bearer ${localStorage.getItem("token")}`
           },
          //  params:{
          //    q: searchKey,
          //    type:'artist',
          //  }
   })
   console.log(data);
    dispatch({type:"SET_GENRE", payload:data.genres})
 }



  return (
    <div> 
      {
      state.genre?.map((e, index) =>(
        <button key={index}>{e}</button>
      ))
      }
      <button onClick={searchGenre}>Ganre</button>
      </div>
   
  )
}

export default Ganre