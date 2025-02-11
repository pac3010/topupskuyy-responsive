import React, { useState } from "react";
import Footer from "../components/Footer";
import GridContent from "../components/GridContent";
import Heroes from "../components/Heroes";
import MenuBar from "../components/MenuBar";
import WavySection from "../components/WavySection";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Game Populer"); // Default tab

  return (
    <>
      <div className="bg-[#ecf4f3] min-h-screen w-full">
        <MenuBar />
        <WavySection>
          <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-[100px] pt-[100px] md:pt-[140px] lg:pt-[170px]">
            <Heroes />
          </div>
        </WavySection>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#25394d"
            fillOpacity="1"
            d="M0,288L80,266.7C160,245,320,203,480,202.7C640,203,800,245,960,245.3C1120,245,1280,203,1360,181.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>

        {/* Tabs Navigation */}
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-[100px] pt-[10px]">
          <div className="flex flex-wrap justify-center md:justify-start border-b-2 border-gray-300">
            {["Game Populer", "Voucher dan E-Wallet", "Pulsa dan PLN"].map((tab) => (
              <button
                key={tab}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300
                  ${activeTab === tab ? "text-[#54c0e4] border-b-4 border-[#54c0e4]" : "text-gray-500"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="container mx-auto px-6 sm:px-10 md:px-16 lg:px-[100px] pt-[20px] pb-[50px]">
          {activeTab === "Game Populer" && <GridContent />}
          {activeTab === "Voucher dan E-Wallet" && <div></div>}
          {activeTab === "Pulsa dan PLN" && <div></div>}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;