

export const initialState = {
  user: {},
  music: [],
  fav: [],
  CLIENT_ID : "4c073fc8b7a04b31b9b3b54e5000ff71",
  REDIRECT_URI : "http://localhost:5173",
  AUTH_ENDPOINT : "https://accounts.spotify.com/authorize",
  RESPONSE_TYPE : "token",
  token: "",
  artist: [],
  result: "",

}

export function reducer (state, action) {
   
  switch (action.type) {
    case "SEARCH_ARTIST":
      return {...state, music: action.payload}

     
       case "SET_TOKEN":
          return {...state, token: action.payload}

          case "SET_ARTIST":
            return {...state, artist: action.payload}


      default:
        throw new Error("The action  not defined");

  }

  
}

