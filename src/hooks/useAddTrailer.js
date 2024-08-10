import { useEffect } from "react";
import { useDispatch } from "react-redux";
import{API_options} from "../utils/links"
import { addTrailerVideo } from "../utils/movieSlice";

const useAddTrailer = ()=>{
    const dispatch = useDispatch();
    const getTrailerVideo = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/533535/videos?language=en-US',API_options);
        const json = await data.json();
        const filteredData = json.results.filter((video)=>video.type==="Trailer");
        const trailer = filteredData.length ?  filteredData[0]:json.results[0];
       
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getTrailerVideo();
    },[])
}
export default useAddTrailer;