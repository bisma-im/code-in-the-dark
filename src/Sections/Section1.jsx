import React from "react";
import Typewriter from "../Components/Typewriter";
import Cards from "../Components/Cards";

const Section1 = () => {
  return (
    <>
      <div className="backgroundSec1 relative flex flex-col items-center justify-start h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="bg-black/35 w-full h-full flex flex-col items-center justify-start">
          <div className="text-center space-y-4 mt-36">
            <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#7038FA] via-[#000000] to-[#7038FA] bg-clip-text">
              <Typewriter
                words={["Organized", "Produced", "Presented"]}
                speed={150}
                repeat={true}
                pauseDuration={1000}
              />
              <span className="text-white">By</span>
            </h2>
          </div>
          <div className="backdrop-blur-sm bg-gradient-to-r from-black via-[#7038FA] to-black p-2 rounded-full px-6 my-5">
            <h1 className="text-white font-bold  text-xl">BUDS x SUPERCOM</h1>
          </div>
        </div>
        {/* <div className="h-1/3 w-[80%]">
          <Cards />
        </div> */}
      </div>
    </>
  );
};

export default Section1;
