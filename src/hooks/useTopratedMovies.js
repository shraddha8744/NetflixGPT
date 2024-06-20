import axios from "axios";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addTopRatedMovies } from "../slices/moviesSlice";
import { useEffect } from "react";



const useTopratedMovies=()=>{
    const dispatch = useDispatch();
  const getTopratedMovies = async () => {
    let response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS
    );
    dispatch(addTopRatedMovies(response?.data?.results));

  };
  useEffect(() => {
    getTopratedMovies();
  }, []);
}
export default useTopratedMovies