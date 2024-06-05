import INITIAL_STATE from "./INITIAL_STATE";
import { registerAction } from "./action";
import { LOGIN_USER_FAILURE, LOGIN_USER_START, LOGIN_USER_SUCCESS, MOVIES_BY_ID_FAILURE, MOVIES_BY_ID_START, MOVIES_BY_ID_SUCCESS, MOVIES_ID, NOW_PLAYING_FAILURE, NOW_PLAYING_START, NOW_PLAYING_SUCCESS, OPEN, POPULAR_FAILURE, POPULAR_START, POPULAR_SUCCESS, REGISTER_USER_FAILURE, REGISTER_USER_START, REGISTER_USER_SUCCESS, SEARCH_FAILURE, SEARCH_START, SEARCH_SUCCESS, TOGGLE, TOP_FAILURE, TOP_START, TOP_SUCCESS, UPCOMMING_FAILURE, UPCOMMING_START, UPCOMMING_SUCCESS } from "./constant";
import { getMoviesByIdReducer, loginReducer, movieIdReducer, nowPlayingMovieReducer, openReducer, popularMoviesReducer, registerReducer, searchMoviesReducer, toggleReducer, topRatedMoviesReducer, upcommingMoviesReducer } from "./reducers";

const reducers = {
    LOGIN_USER_START:loginReducer,
    LOGIN_USER_SUCCESS:loginReducer,
    LOGIN_USER_FAILURE:loginReducer,

    REGISTER_USER_START:registerReducer,
    REGISTER_USER_SUCCESS:registerReducer,
    REGISTER_USER_FAILURE:registerReducer,
    
    NOW_PLAYING_START:nowPlayingMovieReducer,
    NOW_PLAYING_SUCCESS:nowPlayingMovieReducer,
    NOW_PLAYING_FAILURE:nowPlayingMovieReducer,

    POPULAR_START:popularMoviesReducer,
    POPULAR_SUCCESS:popularMoviesReducer,
    POPULAR_FAILURE:popularMoviesReducer,

    TOP_START:topRatedMoviesReducer,
    TOP_SUCCESS:topRatedMoviesReducer,
    TOP_FAILURE:topRatedMoviesReducer,
    
    UPCOMMING_START:upcommingMoviesReducer,
    UPCOMMING_SUCCESS:upcommingMoviesReducer,
    UPCOMMING_FAILURE:upcommingMoviesReducer,

    SEARCH_START:searchMoviesReducer,
    SEARCH_SUCCESS:searchMoviesReducer,
    SEARCH_FAILURE:searchMoviesReducer,
    
    MOVIES_BY_ID_START:getMoviesByIdReducer,
    MOVIES_BY_ID_SUCCESS:getMoviesByIdReducer,
    MOVIES_BY_ID_FAILURE:getMoviesByIdReducer,

    MOVIES_ID: movieIdReducer,
    TOGGLE:toggleReducer,
    OPEN:openReducer,



}


export const commonReducer = (state=INITIAL_STATE,action) =>{
   const {type,payload} = action;
   const reducer = reducers[type];
   return reducer ? reducer(state,payload) : state
}


