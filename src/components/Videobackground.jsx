import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const Videobackground = ({ movieID }) => {
  const movieKey = useSelector((state) => state.movies.trailer);
  useMovieTrailer(movieID);
  return (
    <div>
      {movieKey && movieKey.key ? (
        <iframe
          className="w-screen aspect-video"
          src={`https://www.youtube.com/embed/${movieKey.key}?autoplay=1&mute=1&rel=0`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default Videobackground;
