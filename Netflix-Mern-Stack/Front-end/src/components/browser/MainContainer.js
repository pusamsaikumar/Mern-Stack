import React, {useEffect} from 'react';
import VideoBackground from '../videobackground/VideoBackground';
import VideoTitle from '../videoTitle/VideoTitle';
import { useSelector,useDispatch } from 'react-redux';
import { nowPlayingMovies, popularMovies, topMovies, upcommingMovies } from '../redux/API';

const MainContainer = () => {
  const dispatch = useDispatch();
//  const nowPlayingMoviesData = useSelector(state => state?.nowPlayingMoviesData );
 
//  const {title,overview} = nowPlayingMoviesData.length > 0 ?  nowPlayingMoviesData[4] : {};

const nowPlayingMoviesData = useSelector(state => state?.nowPlayingMoviesData ) ?? [];
 
 const {title,overview,id} =  nowPlayingMoviesData[4] ?? {};
 console.log("main container id",id)
 useEffect(() => {

  dispatch(nowPlayingMovies());
  
  
},[dispatch]);
  return (
    <div>
          <VideoTitle title={title} overview = {overview} />
        <VideoBackground moviesId={id} />
      
    </div>
  )
}

export default MainContainer