import React from "react";

const MovieCard = ({ imagePath }) => {
  return (
    <div className="w-48 pr-4 ">
      <img
        src={`https://image.tmdb.org/t/p/w780/${imagePath} `}
        alt=""
        className="rounded-lg"
      />
    </div>
  );
};

export default MovieCard;
