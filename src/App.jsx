import react, {useState,useEffect, useContext} from 'react';
import axios from 'axios';
import './style/App.scss'
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Main from './components/body/main/Main';
import Section from './components/body/section/Section';
import { dataContext } from './context/Context';


function App() {
  
  const {state, dispatch} = useContext(dataContext)
 
  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")
      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }
      dispatch({type:"SET_TOKEN", payload:token})
  }, [])
  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }
 


  


  return (
      <div className="App">
        <Header />
        <Navbar />
        <Main />
        <Section />
        
          <header className="App-header">
              <h1>Spotify React</h1>
              {!state.token ?
                  <a href={`${state.AUTH_ENDPOINT}?client_id=${state.CLIENT_ID}&redirect_uri=${state.REDIRECT_URI}&response_type=${state.RESPONSE_TYPE}`}>Login
                      to Spotify</a>
                  : <button onClick={logout}>Logout</button>}
          </header>
        

        
      </div>
  );
}

export default App;
