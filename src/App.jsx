import react, {useState,useEffect} from 'react';
import axios from 'axios';
import './style/App.scss'


function App() {
  const CLIENT_ID = "4c073fc8b7a04b31b9b3b54e5000ff71"
  const REDIRECT_URI = "http://localhost:5173"
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
  const RESPONSE_TYPE = "token"

  const [token, setToken] = useState("");
  const [result, setResult] = useState();

  useEffect(() => {
      const hash = window.location.hash
      let token = window.localStorage.getItem("token")

      if (!token && hash) {
          token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", token)
      }

      setToken(token)

  }, [])

  const logout = () => {
      setToken("")
      window.localStorage.removeItem("token")
  }


const [searchKey, setSearchKey] = useState()

function searchAlbum(e) {
  e.preventDefault()
  axios("https://api.spotify.com/v1/search", {
          headers:{
            Authorization:`Bearer ${token}`
          },
          params:{
            q: searchKey,
            type: 'artist'
          }

  })
    .then(res=>console.log(setResult(res.data)))
    .catch(err=>console.log(err)); 
}
  

  return (
      <div className="App">
          <header className="App-header">
              <h1>Spotify React</h1>
              {!token ?
                  <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                      to Spotify</a>
                  : <button onClick={logout}>Logout</button>}
          </header>
          <form onSubmit={searchAlbum}>
                <input type="text" onChange={e => setResult(e.target.value)}/>
          <button onClick={searchAlbum}>Get album</button>
          </form>
      </div>
  );
}

export default App;
