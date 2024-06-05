import React, { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getMoviesById } from '../redux/API';
import {Button,Modal,ModalBody,Spinner} from "react-bootstrap"
import MovieModel from '../movieDialogueModel/MovieModel';
import UseById from '../hook/UseById';

const VideoBackground = ({moviesId,bool}) => {



  const dispatch = useDispatch();




  useEffect(() => { 
    if (moviesId) {
        dispatch(getMoviesById(moviesId));
    } else {
        console.log("invalid id");
    }
}, [moviesId, dispatch]);  // Include dispatch if it's from outside the useEffect

const trailerMovie = useSelector((store) => store?.trailerMovie);
console.log(" trailer api_key", trailerMovie?.key );
console.log("movies id ",moviesId);
  // UseById(moviesId);
 
  // src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1`}
  return (


  <>
    {
      trailerMovie ? (

        <div className='w-[vw] overflow-hidden '>
        <iframe
        className={`${bool ? "w-[100%]" :"w-screen aspect-video"}`}
     //    height={"560"}
     //    width={"560"}
    // https://www.youtube.com/embed/c2G18nIVpNE?si=HorxQfzFY2_TAO1W&autoplay=1&mute=1
       //src="https://www.youtube.com/embed/7PIji8OubXU?si=SKdq7GEsqI4BFCkx&autoplay=1&mute=1" 
       src={`https://www.youtube.com/embed/${trailerMovie?.key}?si=SKdq7GEsqI4BFCkx&autoplay=1&mute=1`}
  
       title='YouTube video player'
       frameBorder="0"
       allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-orgin-when-cross-orgin'
        allowFullScreen
        >
 
         
 
        </iframe>
        
     </div>
      ) : (<>
            <Spinner animation="border" role="status" variant='secondary'>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      </>)
    }
  
  </>



   


  )
}

export default VideoBackground