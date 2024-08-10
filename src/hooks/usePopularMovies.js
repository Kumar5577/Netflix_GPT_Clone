import { useDispatch } from "react-redux";
import { addpopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/links";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const popularMovies = async ()=>{
      const data =  await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_options);
      const json = await data.json();
      
      
      dispatch(addpopularMovies(json.results))
    }
    useEffect(()=>{
        popularMovies();
        
    },[])
}
export default usePopularMovies;