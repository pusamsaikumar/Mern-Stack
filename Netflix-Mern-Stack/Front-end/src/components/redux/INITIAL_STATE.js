const INITIAL_STATE = {
    loginData:{},
    loginMessage:"",
    loginLoading:false,

    registerData:{},
    registerMessage:"",
    registerLoading:false,

    nowPlayingMoviesData:{},
    nowPlayingMoviesMessage:"",
    nowPlayingMoviesLoading:false,
    popularMoviesData:{},
    popularMoviesMessage:"",
    popularMoviesLoading:false,

    topRatedMoviesData:{},
    topRatedMoviesMessage:"",
    topRatedMoviesLoading:false,

    upcommingMoviesData:{},
    upcommingMoviesMessage:"",
    upcommingMoviesLoading:false,

    searchMoviesData:{},
    searchMoviesName:null,

    searchMoviesMessage:"",
    searchMoviesLoading:false,

    moviesByIdData:{},
    trailerMovie:null, 
    moviesByIdMessage:"",
    moviesByIdLoading:false,
    
    toggle:false,
  
    open:false,
    id:""

    
};

export default INITIAL_STATE;