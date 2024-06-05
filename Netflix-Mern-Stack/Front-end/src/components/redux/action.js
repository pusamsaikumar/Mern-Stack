export const loginAction =(type,data,message,loading) => {
  return {
    type:type,
    payload:{
        data,
        message,
        loading
    }
  }
}
export const registerAction =(type,data,message,loading) => {
    return {
      type:type,
      payload:{
          data,
          message,
          loading
      }
    }
  }

  export const nowPlayingMoviesAction =(type,data,message,loading) => {
    return {
      type:type,
      payload:{
          data,
          message,
          loading
      }
    }
  }
  export const popularMoviesAction =(type,data,message,loading) => {
    return {
      type:type,
      payload:{
          data,
          message,
          loading
      }
    }
  }
  export const topRatedMoviesAction =(type,data,message,loading) => {
    return {
      type:type,
      payload:{
          data,
          message,
          loading
      }
    }
  }
  export const upcommingMoviesAction =(type,data,message,loading) => {
    return {
      type:type,
      payload:{
          data,
      
          message,
          loading
      }
    }
  }

  export const searchMoviesAction =(type,data,movieName,message,loading) => {
    return {
      type:type,
      payload:{
          data,
          movieName,
          message,
          loading
      }
    }
  }
  export const getMoviesByIdAction =(type,data,message,loading,trailerMovie) => {
    return {
      type:type,
      payload:{
          data,
      
          message,
          loading,
          trailerMovie
      }
    }
  }

  export const moviesIdAction =(type,id) => {
    return {
      type:type,
      payload:{
         id
      }
    }
  }

  export const toggleAction =(type,toggle) => {
    return {
      type:type,
      payload:{
        toggle
      }
    }
  }

  export const openAction =(type,open) => {
    return {
      type:type,
      payload:{
        open
      }
    }
  }

  