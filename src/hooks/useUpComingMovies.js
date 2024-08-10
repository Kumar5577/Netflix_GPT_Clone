import { useDispatch } from "react-redux";
import { addTopRatedMovies, addUpComing } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/links";

const useUpComingMovies = ()=>{
    const dispatch = useDispatch();
    const upComingMovies = async ()=>{
      const data =  await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_options);
      const json = await data.json();
      dispatch(addUpComing(json.results))
    }
    useEffect(()=>{
        upComingMovies();
    },[])
}
export default useUpComingMovies;