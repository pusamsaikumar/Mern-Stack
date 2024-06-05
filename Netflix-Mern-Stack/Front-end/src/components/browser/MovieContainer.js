import React, {useState,useEffect} from 'react';
import MovieList from '../movieList/MovieList';
import { useSelector,useDispatch } from 'react-redux';

import { nowPlayingMovies, popularMovies, topMovies, upcommingMovies } from '../redux/API';

const MovieContainer = () => {
  const nowPlayingMoviesData = useSelector(store => store?.nowPlayingMoviesData );
  const popularMoviesData = useSelector(store=> store?.popularMoviesData);
  const topRatedMoviesData = useSelector((store) => store?.topRatedMoviesData);
  const upcommingMoviesData = useSelector(store => store?.upcommingMoviesData);
  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(nowPlayingMovies());
    dispatch(popularMovies());
    dispatch(topMovies());
    dispatch(upcommingMovies());
    
  },[dispatch]);
  return (
    <div className='bg-black'>
       <div className='-mt-52 relative z-10' >
            <MovieList title="Popular Movies" movies={popularMoviesData} />
            <MovieList title="Now Playing Movies" movies={nowPlayingMoviesData} />
            <MovieList title="Top Rated Movies" movies={topRatedMoviesData} />
            <MovieList title="Upcoming Movies" movies={upcommingMoviesData} />
          </div>
    
    </div>
  )
}

export default MovieContainer