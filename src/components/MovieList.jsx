import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) {
    return <p>No movies available</p>;
  }

  return (
    <div className="px-6 ">
      <h1 className="text-3xl font-medium py-6 text-white">{title}</h1>

      <div className="flex overflow-x-scroll scrollbar-hidden">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} imagePath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
