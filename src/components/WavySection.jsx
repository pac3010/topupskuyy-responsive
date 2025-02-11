import React from "react";

const WavySection = ({ children }) => {
  return (
    <div className="relative w-full h-[400px] bg-[#25394d]">
      {/* Keep this div for children but place it ABOVE the SVG */}
      <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-10">
        {children}
      </div>
    </div>
  );
};

export default WavySection;
