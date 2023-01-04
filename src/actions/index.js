

// action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_UNFAVOURITE"
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES"
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST"
// action creators
export function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}


export function addFavourites(movie) {
  return {
    type: ADD_TO_FAVOURITE,
    movie,
  };
}

export function removeFromFavourites(movie) {
  return {
    type: REMOVE_FROM_FAVOURITE,
    movie,
  };
}

export function setShowFavourites(val) {
  return {
    type: SET_SHOW_FAVOURITES,
    val,
  };
}

export function handleMovieSearch(movie){
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=e7065d7e&t=${movie}`;

  return function (dispatch){
    fetch(url)
    .then(response => response.json())
    .then(movie=>{
      console.log('movie', movie)
  
      // dispatch an action
      // dispatch({type: 'ADD_SEARCH_RESULT', movie})
    })
  }
  

}

export function addMovieToList(movie){
  return {
    type: ADD_MOVIE_TO_LIST,
    movie
  }
}