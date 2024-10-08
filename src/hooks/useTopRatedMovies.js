import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/links";

const useTopRatedMovies = ()=>{
    const dispatch = useDispatch();
    const topRatedMovies = async ()=>{
      const data =  await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_options);
      const json = await data.json();
      console.log(json);
      dispatch(addTopRatedMovies(json.results))
    }
    useEffect(()=>{
        topRatedMovies();
    },[])
}
export default useTopRatedMovies;