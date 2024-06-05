import React from 'react'
import MovieCard from '../movieCard/MovieCard'

const MovieList = ({title,movies,searchMovie=false}) => {
  return (
    <div className='px-8'>
        <h1 className={`${searchMovie ? "text-black" : "text-white"} text-3xl py-3`}>{title}</h1>
       
        <div className="flex no-scrollbar overflow-x-auto cursor-pointer">
                <div className='flex items-center'>
           {
            Array.isArray(movies) &&   movies?.map((movie) => {
                return <MovieCard  key={movie.id} movieId={movie.id} poster_path = {movie.poster_path}/>
            })
           }
            </div>
       </div>
    </div>
  )
}

export default MovieList