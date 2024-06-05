
import { getMoviesByIdAction, loginAction, moviesIdAction, nowPlayingMoviesAction, openAction, popularMoviesAction, registerAction, searchMoviesAction, toggleAction, topRatedMoviesAction, upcommingMoviesAction } from "./action";
import { header, tmDBheader } from "./auth";
import * as Constants from "./constant";
import axios from "axios";
import {toast,ToastContainer} from "react-toastify";
import { useNavigate } from "react-router-dom";




export const loginUser = (value) => async(dispatch) => {
   
     dispatch(loginAction(Constants.LOGIN_USER_START, {},"",true));
     let body = {
        "email":value.email,
        "password":value.password
     }
     let config = {
        method:"post",
        url:"http://localhost:4008/api/user/login",
        headers :header,
        data:body,
        withCredentials: true
     }
     await axios(config).then((res) => {
        dispatch(loginAction(Constants.LOGIN_USER_SUCCESS,
          res?.data?.User?.otherDetails,
          res?.data?.Message,
          false

        ));
        toast.success(res?.data?.Message,{
         position:"top-center",
         autoClose:5000,
          hideProgressBar:false,
          closeOnClick:false,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
         // theme:"colored"
        });
       
        setTimeout(() => {
         window.location.href="/browser"
   
        }, 5000);
     
     })
     .catch((err) => {
      
        dispatch(loginAction(Constants.LOGIN_USER_FAILURE,err?.response?.data?.message,"",false));
        toast.error(err?.response?.data?.Message,{
         position:"top-center",
         autoClose:5000,
          hideProgressBar:false,
          closeOnClick:false,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
        })
     })
}

export const registerUser = (value) => async(dispatch) => {
   dispatch(registerAction(Constants.REGISTER_USER_START,{},"",true));
   let body = {
      "fullName":value.fullName,
      "email":value.email,
      "password":value.password
   }
   var config = {
      method:"post",
      url:"http://localhost:4008/api/user/register",
      headers:header,
      data:body,
      withCredentials: true
   }
   await axios(config).then((res) => {
      dispatch(registerAction(Constants.REGISTER_USER_SUCCESS,res?.data?.Message,res?.data?.Message,false));
      toast.success(res?.data?.Message,{
         position:"top-center",
         autoClose:5000,
          hideProgressBar:false,
          closeOnClick:false,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
         // theme:"colored"
      });
      setTimeout(() => {
         window.location.href="/login"
    },5000);
   }).catch((err) => {
      dispatch(registerAction(Constants.REGISTER_USER_FAILURE,{},err?.response?.data?.message,false));
      toast.error(err?.response?.data?.Message,{
         position:"top-center",
         autoClose:5000,
          hideProgressBar:false,
          closeOnClick:false,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
        });
   })
}

export const logoutUser= (value) => async(dispatch) => {
   dispatch(loginAction(Constants.LOGIN_USER_START, {},"",true));
   
   let config = {
      method:"get",
      url:"http://localhost:4008/api/user/logout",
      headers :header,
      
      withCredentials: true
   }
   await axios(config).then((res) => {
      dispatch(loginAction(Constants.LOGIN_USER_SUCCESS,
        res?.data?.Message,
        res?.data?.Message,
        false

      ));
      toast.success(res?.data?.Message,{
         position:"top-center",
         autoClose:5000,
          hideProgressBar:false,
          closeOnClick:false,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
       //  theme:"colored"
      });
      setTimeout(() => {
         window.location.href="/login"
      }, 5000);
   })
   .catch((err) => {
    
      dispatch(loginAction(Constants.LOGIN_USER_FAILURE,err?.response?.data?.message,"",false));
      toast.error(err?.response?.data?.Message,{
         position:"top-center",
         autoClose:5000,
          hideProgressBar:false,
          closeOnClick:false,
          pauseOnHover:true,
          draggable:true,
          progress:undefined,
        });
   })
}

export const nowPlayingMovies = () => async(dispatch) => {
   dispatch(nowPlayingMoviesAction(Constants.NOW_PLAYING_START,{},"",true));
   var config = {
      method:'get',
      url:'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      headers:tmDBheader
   }
   await axios(config).then((res)=>{
         console.log("api res",res.data.results)
         dispatch(nowPlayingMoviesAction(Constants.NOW_PLAYING_SUCCESS,
               res?.data?.results,
               "Successful",
               false
         ))
   }).catch((err) => {
        console.log("err",err.response);
        dispatch(nowPlayingMoviesAction(Constants.NOW_PLAYING_FAILURE,{},err?.response?.data?.Message,false))
   })
}
export const popularMovies = () => async(dispatch) => {
   dispatch(popularMoviesAction(Constants.POPULAR_START,{},"",true));
   var config = {
      method:'get',
      url:'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      headers:tmDBheader
   }
   await axios(config).then((res)=>{
         console.log("api res",res.data.results)
         dispatch(popularMoviesAction(Constants.POPULAR_SUCCESS,
               res?.data?.results,
               "Successful",
               false
         ))
   }).catch((err) => {
        console.log("err",err.response);
        dispatch(popularMoviesAction(Constants.POPULAR_FAILURE,{},err?.response?.data?.Message,false))
   })
}

export const topMovies = () => async(dispatch) => {
   dispatch(topRatedMoviesAction(Constants.TOP_START,{},"",true));
   var config = {
      method:'get',
      url:'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      headers:tmDBheader
   }
   await axios(config).then((res)=>{
         console.log("api res",res.data.results)
         dispatch(topRatedMoviesAction(Constants.TOP_SUCCESS,
               res?.data?.results,
               "Successful",
               false
         ))
   }).catch((err) => {
        console.log("err",err.response);
        dispatch(topRatedMoviesAction(Constants.TOP_FAILURE,{},err?.response?.data?.Message,false))
   })
}

export const upcommingMovies = () => async(dispatch) => {
   dispatch(upcommingMoviesAction(Constants.UPCOMMING_START,{},"",true));
   var config = {
      method:'get',
      url:'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',
      headers:tmDBheader
   }
   await axios(config).then((res)=>{
         console.log("api res",res.data.results)
         dispatch(upcommingMoviesAction(Constants.UPCOMMING_SUCCESS,
               res?.data?.results,
               "Successful",
               false
         ))
   }).catch((err) => {
        console.log("err",err.response);
        dispatch(upcommingMoviesAction(Constants.UPCOMMING_FAILURE,{},err?.response?.data?.Message,false))
   })
}
export const searchMovies = (searchMovie,setSearchMovie,setSearchData) => async(dispatch) => {
   dispatch(searchMoviesAction(Constants.SEARCH_START,{},null,"",true));
   var config = {
      method:'get',
      url:`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,
      headers:tmDBheader
   }
   await axios(config).then((res)=>{
         console.log("Search res",res?.data?.results)
         dispatch(searchMoviesAction(Constants.SEARCH_SUCCESS,
               res?.data?.results,
               searchMovie,
               "Successful",
               false
         ));
         setSearchData(res?.data?.results)
         setSearchMovie(searchMovie);
   }).catch((err) => {
        console.log("err",err.response);
        dispatch(searchMoviesAction(Constants.SEARCH_FAILURE,{},null,err?.response?.data?.Message,false))
   });
  
}

 // TMDB API_KEY  :  api_key=7e33ae6c05f660ab5802f9069cc560ce  
// https://api.themoviedb.org/3/movie/${moviesId}?api_key=7e33ae6c05f660ab5802f9069cc560ce&append_to_response=videos  

export const getMoviesById = (moviesId) => async(dispatch) => {
   dispatch(getMoviesByIdAction(Constants.MOVIES_BY_ID_START,{},"",true,null));
   if(!moviesId){
      dispatch(getMoviesByIdAction(Constants.MOVIES_BY_ID_FAILURE,{},"Invalid Id",false,null));
   }
   var config = {
      method:'get',
      url:`https://api.themoviedb.org/3/movie/${moviesId}/videos?language=en-US`,
    //url:`https://api.themoviedb.org/3/movie/${moviesId}/videos`,
   // url:`https://api.themoviedb.org/3/movie/${moviesId}?api_key=7e33ae6c05f660ab5802f9069cc560ce&append_to_response=videos`,
      headers:tmDBheader
   }
   await axios(config).then((res)=>{
         console.log("api res",res.data.results)
         // dispatch(getMoviesByIdAction(Constants.MOVIES_BY_ID_SUCCESS,
         //       res?.data?.results,
         //       "Successful",
         //       false
         // ))

         // Trailer movies only one
         const trailer = res?.data?.results?.filter((item) => {
            return (item.type === "Trailer")
         });
      const selectTrailer =   trailer?.length > 0 ? trailer[0] : res?.data?.resutls[0];
      console.log("select trailer",selectTrailer);
          dispatch(getMoviesByIdAction(Constants.MOVIES_BY_ID_SUCCESS,
             res?.data?.results,
               "Successful",
               false,
               selectTrailer ,
         ))
         
   }).catch((err) => {
        console.log("err",err.response);
        dispatch(getMoviesByIdAction(Constants.MOVIES_BY_ID_FAILURE,{},err?.response?.data?.Message,false,null))
   })
}

export const getId = (moviesId) => (dispatch) => {
      dispatch(moviesIdAction(Constants.MOVIES_ID,moviesId));
}
export const  setOPEN = (val) => (dispatch) => {
   dispatch(openAction(Constants.OPEN,val));
   
}

export const setToggle = (val) => (dispatch) => {
   dispatch(toggleAction(Constants.TOGGLE,val));
}

// const url = 'https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMzYWU2YzA1ZjY2MGFiNTgwMmY5MDY5Y2M1NjBjZSIsInN1YiI6IjYyMWIxMjA3MWQ4MjBmMDA2MzIzMDc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YveKn310wAF7DNgIUG0cMcwWZP1FEQJ6-aVn2BkYjsw'
//   }
// };

//export const  SEARCH_MOVIE_URL="https://api.themoviedb.org/3/search/movie?query=";
// const url = 'https://api.themoviedb.org/3/search/movie?query=""&include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMzYWU2YzA1ZjY2MGFiNTgwMmY5MDY5Y2M1NjBjZSIsInN1YiI6IjYyMWIxMjA3MWQ4MjBmMDA2MzIzMDc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YveKn310wAF7DNgIUG0cMcwWZP1FEQJ6-aVn2BkYjsw'
//   }
// };

// const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMzYWU2YzA1ZjY2MGFiNTgwMmY5MDY5Y2M1NjBjZSIsInN1YiI6IjYyMWIxMjA3MWQ4MjBmMDA2MzIzMDc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YveKn310wAF7DNgIUG0cMcwWZP1FEQJ6-aVn2BkYjsw'
//   }
// };

// const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMzYWU2YzA1ZjY2MGFiNTgwMmY5MDY5Y2M1NjBjZSIsInN1YiI6IjYyMWIxMjA3MWQ4MjBmMDA2MzIzMDc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YveKn310wAF7DNgIUG0cMcwWZP1FEQJ6-aVn2BkYjsw'
//   }
// };

// const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTMzYWU2YzA1ZjY2MGFiNTgwMmY5MDY5Y2M1NjBjZSIsInN1YiI6IjYyMWIxMjA3MWQ4MjBmMDA2MzIzMDc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YveKn310wAF7DNgIUG0cMcwWZP1FEQJ6-aVn2BkYjsw'
//   }
// };
// working
// const getMovies = async() =>{
//    var config = {
//      method:"get",
//      url:"https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
//      headers:tmDBheader
//    }
//    await axios(config).then((res) => console.log("res movies",res?.data)).catch((err) => console.log(err))
// }
