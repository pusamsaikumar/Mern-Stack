
export const loginReducer = (state,payload) => {
    return {
        ...state,
        loginData:payload && payload.data && payload.data,
        loginMessage:payload && payload.message && payload.message,
        loginLoading : payload && payload.loading && payload.loading

    

    }
};

export const registerReducer = (state,payload)=>{
    return {
        ...state,
        registerData:payload && payload.data && payload.data,
        registerMessage:payload && payload.message && payload.message,
        registerLoading : payload && payload.loading && payload.loading


       
    }
}

export const nowPlayingMovieReducer=(state,payload)=>{
    return {
        ...state,
        nowPlayingMoviesData:payload && payload.data && payload.data,
       nowPlayingMoviesMessage: payload && payload.message && payload.message,
        nowPlayingMoviesLoading: payload && payload.loading && payload.loading

    }
}
export const popularMoviesReducer=(state,payload)=>{
    return {
        ...state,
        popularMoviesData:payload && payload.data && payload.data,
        popularMoviesMessage: payload && payload.message && payload.message,
        popularMoviesLoading: payload && payload.loading && payload.loading
    }
}

export const topRatedMoviesReducer=(state,payload)=>{
    return {
        ...state,
        topRatedMoviesData:payload && payload.data && payload.data,
        topRatedMoviesMessage: payload && payload.message && payload.message,
        topRatedMoviesLoading: payload && payload.loading && payload.loading


      
    }
}
export const upcommingMoviesReducer=(state,payload)=>{
    return {
        ...state,
        upcommingMoviesData:payload && payload.data && payload.data,
        upcommingMoviesMessage: payload && payload.message && payload.message,
        upcommingMoviesLoading: payload && payload.loading && payload.loading


      
    }
}
export const searchMoviesReducer=(state,payload)=>{
    return {
        ...state,
        searchMoviesData:payload && payload.data && payload.data,
        searchMoviesName:payload && payload.movieName && payload.movieName,

        searchMoviesMessage: payload && payload.message && payload.message,
        searchMoviesLoading: payload && payload.loading && payload.loading,
     
       
    }
}

export const getMoviesByIdReducer=(state,payload)=>{
    return {
        ...state,
        moviesByIdData:payload && payload.data && payload.data,
        moviesByIdMessage: payload && payload.message && payload.message,
        moviesByIdLoading: payload && payload.loading && payload.loading,
        
        trailerMovie:payload && payload.trailerMovie && payload.trailerMovie, 
         

      
    }
}

export const movieIdReducer = (state,payload) => {
    return {
        ...state,
        id:payload && payload.id && payload.id
    }
}

export const toggleReducer = (state,payload) => {
    return {
        ...state,
        toggle:payload && payload.toggle && payload.toggle
    }
}
export const openReducer = (state,payload) => {
    return {
        ...state,
        open: payload && payload.open && payload.open
    }
}
