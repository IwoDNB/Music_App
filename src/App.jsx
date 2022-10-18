import react, {useState,useEffect, useContext} from 'react';
import axios from 'axios';
import './style/App.scss'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Main from './components/body/main/Main';


import { dataContext } from './context/Context';


function App() {
  
  const {state, dispatch} = useContext(dataContext)
  const [token, setToken] = useState({})

 const CLIENT_ID = "bbba81dcfa2c4799bc3cc6c936e5aff0"
 const REDIRECT_URI = "http://localhost:5173"
 const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
 const RESPONSE_TYPE = "token"

 
  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")
      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }
    //   dispatch({type:"SET_TOKEN", payload:token})
            setToken(token)
  }, [])
  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }
 


  return (
      <div className="App">
        
        <Navbar />
        <Main />
        
          <div className="App-header">
              <h1>Spotify React</h1>
              {!token ?
                  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                      to Spotify</a>
                  : <div>
                    <button onClick={logout}>Logout</button>
                     
                     </div>  }
          </div>
        

        
      </div>
  );
}

export default App;
