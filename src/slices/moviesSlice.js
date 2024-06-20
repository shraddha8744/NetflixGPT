import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies:null,
    TopRatedMovies:null,
    trailer: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.TopRatedMovies = action.payload;
    },
    addTrailer: (state, action) => {
      state.trailer = action.payload;
    }
  }
});

export const { addNowPlayingMovies, addTrailer ,addPopularMovies,addTopRatedMovies} = movieSlice.actions;

export default movieSlice.reducer;
