import axios from "axios";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../slices/moviesSlice";
import { useEffect } from "react";



const useNowPlaingMovies=()=>{
    const dispatch = useDispatch();
  const getNowplayingMovies = async () => {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    dispatch(addNowPlayingMovies(response?.data?.results));

  };
  useEffect(() => {
    getNowplayingMovies();
  }, []);
}
export default useNowPlaingMovies