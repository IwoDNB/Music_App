export const initialState = {
  user: {},
  music: [],
  fav: [],
  artist: [],
  result: "",
  display: [],
  genre: [],

};

export function reducer(state, action) {
  switch (action.type) {
    case "SEARCH_ARTIST":
      return { ...state, music: action.payload };

    case "SET_ARTIST":
      return { ...state, artist: action.payload };

    case "DISPLAY_ARTIST":
      return { ...state, display: action.payload };

    case "FAV_ARTIST":
      return { ...state, fav: [...state.fav, action. payload] };

      case "SET_GENRE":
      return { ...state, genre: action.payload };

       case 'REGISTER':
       return { ...state, user: action.payload };

    default:
      throw new Error("The action  not defined");
  }
}
