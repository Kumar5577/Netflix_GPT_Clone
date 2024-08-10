import { useDispatch } from "react-redux";
import {addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_options } from "../utils/links";

const useNowPlayingMovies = ()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = async ()=>{
      const data =  await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_options);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results))
    }
    useEffect(()=>{
        nowPlayingMovies();
    },[])
}
export default useNowPlayingMovies;