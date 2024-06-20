import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchbar = () => {
  const language = useSelector((state) => state.config.lang);
  const currentLang = lang[language] || lang["English"]; // Fallback to English if language is not defined

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        action=""
        className="w-1/2 bg-black grid grid-cols-12 bg-opacity-50"
      >
        <input
          type="text"
          placeholder={currentLang.gptSearchPlaceHolder}
          className="p-4 m-4 col-span-9 rounded-lg border-none"
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg font-bold">
          {currentLang.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
