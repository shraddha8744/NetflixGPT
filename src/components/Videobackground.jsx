import React from "react";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const Videobackground = ({ movieID }) => {
  const movieKey = useSelector((state) => state.movies.trailer);
  useMovieTrailer(movieID);

  return (
    <div>
      {movieKey && movieKey.key ? (
        <div>
          <iframe
            className="w-screen aspect-video mt-0"
            src={`https://www.youtube.com/embed/${movieKey.key}?autoplay=1&mute=1&rel=0&fs=1&modestbranding=1&showinfo=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>Loading trailer...</p>
      )}
    </div>
  );
};

export default Videobackground;
