import { Play } from "lucide-react";
import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="pt-[15%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-lg font-semibold w-1/3 text-white">{overview}</p>
      <div className="flex space-x-3">
        <button className=" w-[100px] h-10 bg-white text-black text-lg font-semibold text-center rounded-lg flex items-center justify-center hover:bg-opacity-80">
          <Play className="mr-1" size={"20px"} fill="black" />
          Play
        </button>
        <button className="border border-zinc-600 w-[130px] h-10 bg-gray-500 text-white bg-opacity-50 text-lg font-semibold rounded-lg flex items-center justify-center hover:bg-opacity-60">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
