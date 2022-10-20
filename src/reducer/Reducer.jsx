export const initialState = {
  user: {},
  music: [],
  fav: [],
  artist: [],
  result: "",
  display: [],
};
export function reducer(state, action) {
  switch (action.type) {
    case "SET_ARTIST":
      var artists = action.payload.map(artist => {
        //check fav-list for each artist
        var index = state.fav.findIndex(e => e.id === artist.id);
        artist.fav = index >= 0;
        return artist;
      });
      //update artist list
      return { ...state, artist: artists };
    case "DISPLAY_ARTIST":
      //update display artist
      return { ...state, display: action.payload };
    case "FAV_ARTIST":
      var artist = action.payload;
      //find current artist in fav-list
      var index = state.fav.indexOf(artist);
      if(index >= 0) {
        //remove item
        artist.fav = false;
        state.fav.splice(index, 1);
      } else {
        //add item
        artist.fav = true;
        state.fav.push(artist);
      }
      //update artists
      var artistIndex = state.artist.findIndex(e => e.id === artist.id);
      state.artist[artistIndex] = artist;
      //update state
      return { ...state };

      case 'REGISTER':
        return { ...state, user: action.payload }

    default:
      throw new Error("The action  not defined");
  }
}