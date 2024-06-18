import axios from "axios";
import { API_OPTIONS } from "../utils/constant";
import { addTrailer } from "../slices/moviesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieID}/videos`,
        API_OPTIONS
      );
      console.log(response.data.results);

      const filteredData = response.data.results.filter(
        (e) => e.type === "Trailer"
      );
      const trailer = filteredData.length
        ? filteredData[0]
        : response.data.results[0];

      console.log(trailer);
      dispatch(addTrailer(trailer));
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    if (movieID) {
      getMovieVideos();
    }
  }, [movieID]);
};

export default useMovieTrailer;
