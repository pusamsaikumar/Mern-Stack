import React,{useEffect,useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import { getId, getMoviesById, setOPEN } from '../redux/API';
import MovieModel from '../movieDialogueModel/MovieModel';
import { OPEN } from '../redux/constant';
import MovieDialogue from '../movieDialogueModel/MovieDialogue';

const MovieCard = ({movieId,poster_path}) => {
    const TBDB_IMG_URL = 'https://image.tmdb.org/t/p/w500';
    //const moviesByIdData = useSelector((store) => store.moviesByIdData);



    const open = useSelector(state => state?.open);
const id = useSelector(state => state?.id);

console.log("model",open,id)
const dispatch = useDispatch();

    // useEffect(() => {
    //   //  dispatch(getMoviesById(movieId));
    //   dispatch(getId(movieId));
    //   dispatch(setOPEN(true));
    // },[])

  // console.log("moviesByIdData",moviesByIdData);

  const handleOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOPEN(true));
  
  }

  return (
   <>
    <div className='w-48 pr-2' onClick={handleOpen}>
        <img src={`${TBDB_IMG_URL}/${poster_path}`} alt='banner_img' />
    </div>
    <MovieModel  open = {open} id={id}  />
    {/* <MovieDialogue open={open} id={id} /> */}
   </> 
  )
}

export default MovieCard;