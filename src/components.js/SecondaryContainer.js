import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = ()=>{
    const movies = useSelector(store=>store.movies)
    return(
        movies.nowPlayingMovies &&
        <div className=" bg-black">
            <div className=" -mt-64 pl-12 relative z-20 ">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies.popularMovies}/>
            <MovieList title={"Trending Movies"} movies={movies.upComingMovies}/>
            <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies}/>
            </div>
        </div>
    )
}
export default SecondaryContainer;