import React from "react";
import GptSearchbar from "./GptSearchbar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { background_img } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 bg-gradient-to-r from-black">
        <img src={background_img} alt="" />
      </div>
      <GptSearchbar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
