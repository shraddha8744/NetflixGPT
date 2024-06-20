import React from "react";
import Header from "./Header";
import useNowPlaingMovies from "../hooks/useNowPlayingmovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import GptSearch from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlaingMovies();
  usePopularMovies();
  useTopratedMovies();
  const gptSearch = useSelector((state) => state.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
      Main conatiner
         -video background
         -video title
      Secondary container
         -movie list * n
            ---movie cards   

       */}
    </div>
  );
};

export default Browse;
