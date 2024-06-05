import React,{useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { searchMovies } from '../redux/API';
import MovieList from '../movieList/MovieList';

const SearchMovie = () => {
    const [searchMovie,setSearchMovie] = useState("");
    const [searchData,setSearchData] = useState(null);
    

   
    const dispatch = useDispatch();
    
   
    const sumitHandler=(e) => {
        e.preventDefault();
       
        dispatch(searchMovies(searchMovie,setSearchMovie,setSearchData));

        
    }
    console.log("sera",searchData);
    const searchMoviesData = useSelector((store) => store?.searchMoviesData);
    const  searchMoviesName = useSelector((store) => store.searchMoviesName);
    console.log("search data", searchMoviesData);
    console.log("movieName",searchMoviesName);
  return (
    <>
       
                <div className='flex justify-center pt-[10%] w-[100%]'> 
                    <form onSubmit={(e) => sumitHandler(e)} className= 'w-[50%]' >
                        <div className='flex justify-between shadow-md border-2 p-2 border-gray-200 rounded-lg w-[100%]'>
                            <input type="text" className='w-full text-lg rounded-md outline-none ' value={searchMovie} name="searchMovie" onChange={(e) => setSearchMovie(e.target.value)} placeholder='Search Movies ...' />
                            <button className='bg-red-800 text-white rounded-md px-4 py-2' type='submit' >Search</button>
                        </div>
                    </form>
                </div>
         {/* {
            searchMoviesData ? (<>
                <h1>available</h1>
            </>) : (<h1>No Movies Found</h1>)
         } */}
         {
          //searchMovie!="" && searchData?.length > 0 ? (   <MovieList title={searchMovie} movies={searchData} searchMovie={true} /> ) : (<h1>No Movies Found</h1>)
          searchMoviesData ? (   <MovieList title={searchMoviesName} movies={searchMoviesData} searchMovie={true} /> ) : (<h1>No Movies Found</h1>)
        }
    </>
  )
}

export default SearchMovie;