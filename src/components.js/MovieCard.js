import { movie_card_CDN } from "../utils/links";

const MovieCard = ({posterPath})=>{
    return(
        <div className="w-48 pr-4">
           <img alt="Movie Logo" src={movie_card_CDN+posterPath}/>
        </div>
    )
}
export default MovieCard;