import React from "react";
import Header from "./Header";
import useNowPlaingMovies from "../hooks/useNowPlayingmovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlaingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
