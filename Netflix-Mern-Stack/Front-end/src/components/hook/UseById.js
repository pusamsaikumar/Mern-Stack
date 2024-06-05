import axios from "axios";

import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { tmDBheader } from "../redux/auth";

import { getMoviesByIdAction, loginAction, moviesIdAction, nowPlayingMoviesAction, openAction, popularMoviesAction, registerAction, searchMoviesAction, toggleAction, topRatedMoviesAction, upcommingMoviesAction } from "../redux/action";

import * as Constants from "../redux/constant";
const UseById = async(moviesId) => {
    const dispatch = useDispatch();

    
    useEffect(()=>{
        const getMovieById = async () => {
            try {
              const res = await axios.get(`https://api.themoviedb.org/3/movie/${moviesId}/videos`,{
                method:"get",
                headers:tmDBheader

              });
      
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
            //  dispatch(getTrailerMovie(trailer.length > 0 ? trailer[0] : res.data.results[0]));
            } catch (error) {
              console.log(error);
            }
          }
          getMovieById();

    },[])
}

export default UseById