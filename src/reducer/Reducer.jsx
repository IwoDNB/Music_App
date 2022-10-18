

export const initialState = {
  user: {},
  music: [],
  fav: [],
  artist: [],
  result: "",

}

export function reducer (state, action) {
   
  switch (action.type) {
    case "SEARCH_ARTIST":
      return {...state, music: action.payload}


          case "SET_ARTIST":
            return {...state, artist: action.payload}


      default:
        throw new Error("The action  not defined");

  }

  
}

