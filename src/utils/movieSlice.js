import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        upComingMovies:null,
        topRatedMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addpopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpComing:(state,action)=>{
            state.upComingMovies = action.payload;
        }
    }
});
export const{addNowPlayingMovies,addTrailerVideo,addpopularMovies,addTopRatedMovies,addUpComing} = movieSlice.actions;
export default movieSlice.reducer;