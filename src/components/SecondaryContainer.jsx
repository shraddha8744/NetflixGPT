import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((state) => state.movies);

  return (
    <div className="bg-black pl-15">
      {/* 
    movie list
    -popular
    movieCards*n
    -treanding
    -now playing movies
    -horror movies
     */}
      <div className="-mt-52 relative z-10  ">
        <MovieList title={"Now playing"} movies={movie.nowPlayingMovies} />
      </div>
      <MovieList title={"Trending Movies"} movies={movie.popularMovies} />

      <MovieList title={"Upcoming Movies"} movies={movie.TopRatedMovies} />
      <MovieList title={"TopRated Movies"} movies={movie.nowPlayingMovies} />

      <MovieList title={"Popular Movies"} movies={movie.nowPlayingMovies} />
      <MovieList title={"Action Movies"} movies={movie.nowPlayingMovies} />
    </div>
  );
};

export default SecondaryContainer;
