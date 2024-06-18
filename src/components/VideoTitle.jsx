import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  return (
    <div className="pt-36 px-12">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg font-semibold w-1/3">{overview}</p>
      <div className="">
        <button className="border border-zinc-600 w-[90px] h-8 bg-white text-black text-lg font-semibold text-center rounded-sm">
          {" "}
          ▶️ Play
        </button>
        <button className="border border-zinc-600 ml-3 w-[110px] h-8 bg-gray-400 text-white bg-opacity-50 text-lg font-semibold rounded-sm">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
