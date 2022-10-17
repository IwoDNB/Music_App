

export const initialState = {
  user: {},
  music: [],
  fav: [],
}

export function reducer (state, action) {
   
  switch (action.type) {
    case "SEARCH_ARTIST":
      return {...state, music: action.payload}


      default:
        throw new Error("The action  not defined");

  }

  
}

