import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import sampleImg from "../assets/sampleImg.png";
import gameData from "../assets/data/gameData";

const GridContent = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <div className="py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
      {gameData.map((game, index) => (
        <div
          key={index}
          onClick={() => navigate("/order")} // Redirects all cards to /order
          className="relative overflow-hidden bg-[#25394d] rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white-800 h-56 group cursor-pointer"
        >
          <div className="neon-border"></div>
          <svg
            className="absolute bottom-0 left-0 mb-8"
            viewBox="0 0 375 283"
            fill="none"
            style={{ transform: "scale(1.5)", opacity: "0.1" }}
          >
            <rect
              x="159.52"
              y={175}
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 159.52 175)"
              fill="white"
            />
            <rect
              y="107.48"
              width={152}
              height={152}
              rx={8}
              transform="rotate(-45 0 107.48)"
              fill="white"
            />
          </svg>
          <div className="relative flex items-center justify-center h-full">
            <img
              className="w-32 transition-transform duration-300"
              src={sampleImg}
              alt={game.name}
            />
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end px-4 pb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
            <span className="text-[#f1c206] font-semibold text-sm">{game.name}</span>
            <span className="text-white opacity-75 text-xs">{game.developer}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GridContent;
