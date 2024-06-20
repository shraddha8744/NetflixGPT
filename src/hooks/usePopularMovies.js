import axios from "axios";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addPopularMovies } from "../slices/moviesSlice";
import { useEffect } from "react";



const usePopularMovies=()=>{
    const dispatch = useDispatch();
  const getPopularMovies = async () => {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS
    );
    dispatch(addPopularMovies(response?.data?.results));

  };
  useEffect(() => {
    getPopularMovies();
  }, []);
}
export default usePopularMovies;