import React, {useState,useEffect} from 'react';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import { tmDBheader } from '../redux/auth';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { nowPlayingMovies, popularMovies, topMovies, upcommingMovies } from '../redux/API';
import SearchMovie from '../searchMovie/SearchMovie';

const Browser = () => {

  const nowPlayingMoviesData = useSelector(store => store.nowPlayingMoviesData );
  const popularMoviesData = useSelector(store=> store.popularMoviesData);
  const topRatedMoviesData = useSelector((store) => store.topRatedMoviesData);
  const upcommingMoviesData = useSelector(store => store.upcommingMoviesData);
  const toggle = useSelector(state => state.toggle);
  console.log("movies",nowPlayingMoviesData);
  console.log("popular",popularMoviesData);
  console.log("top",topRatedMoviesData);
  console.log("upcomming",upcommingMoviesData)
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(nowPlayingMovies());
    dispatch(popularMovies());
    dispatch(topMovies());
    dispatch(upcommingMovies());
    
  },[dispatch]);
  

  return (
    <div>

      {
        toggle ? <SearchMovie /> :
        <>
        <MainContainer />
        <MovieContainer />
        </>
      }
      
    </div>
  )
}

export default Browser