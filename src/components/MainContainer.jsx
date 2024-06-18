import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videobackground from "./Videobackground";

const MainContainer = () => {
  let movies = useSelector((state) => state?.movies?.nowPlayingMovies);
  if (movies == null) {
    return;
  }
  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  console.log("main container");
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <Videobackground movieID={id} />
    </div>
  );
};

export default MainContainer;
