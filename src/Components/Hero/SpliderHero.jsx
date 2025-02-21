import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";

import React from "react";

// Default theme
import "@splidejs/react-splide/css";
const SpliderHero = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "35rem",
  };

  return (
    <div>
      <Splide
        options={options}
        aria-labelledby="autoplay-example-heading"
        hasTrack={false}
      >
        <div style={{ position: "relative" }}>
          <SplideTrack>
            <SplideSlide>
              <div
                className=" relative bg-cover  w-full h-full flex flex-col justify-center items-center px-20 "
                style={{
                  backgroundImage: "url('/new_img/fabrication-service.png')",
                }}
              >
                <div class="absolute inset-0 bg-[#16243a]/70 backdrop-blur"></div>
                <div className="z-10 text-white  flex  gap-2 xl:gap-5 flex-col ">
                  <p className=" font-bold text-nowrap text-3xl xl:text-5xl  ">
                    Global Leader
                  </p>
                  <p className="  xl:w-3/5   text-lg">
                    As a Quality Assured organization, we are ISO 9001:2015
                    certified, delivering world-class training solutions
                    tailored to the oil & gas, marine, and construction
                    industries. Our commitment to excellence ensures the highest
                    standards of professional development and operational
                    integrity.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                className=" relative bg-cover  w-full h-full flex flex-col justify-center items-center px-20 "
                style={{
                  backgroundImage: "url('/new_img/crane.jpg')",
                }}
              >
                <div class="absolute inset-0 bg-[#16243a]/70 backdrop-blur"></div>
                <div className="z-10 text-white  flex  gap-2 xl:gap-5 flex-col ">
                  <p className=" font-bold text-nowrap text-3xl xl:text-5xl  ">
                    Veteran Asset Perfection <br /> Assurance
                  </p>
                  <p className="  xl:w-3/5   text-lg">
                    As a Quality Assured organization, we are ISO 9001:2015
                    certified, delivering world-class training solutions
                    tailored to the oil & gas, marine, and construction
                    industries. Our commitment to excellence ensures the highest
                    standards of professional development and operational
                    integrity.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div
                className=" relative bg-cover  w-full h-full flex flex-col justify-center items-center px-20 "
                style={{
                  backgroundImage: "url('/new_img/training-program.png')",
                }}
              >
                <div class="absolute inset-0 bg-[#16243a]/70 backdrop-blur"></div>
                <div className="z-10 text-white  flex  gap-2 xl:gap-5 flex-col ">
                  <p className=" font-bold text-nowrap text-3xl xl:text-5xl  ">
                    Training Solutions
                  </p>
                  <p className="  xl:w-3/5   text-lg">
                    As a Quality Assured organization, we are ISO 9001:2015
                    certified, delivering world-class training solutions
                    tailored to the oil & gas, marine, and construction
                    industries. <br /> Our commitment to excellence ensures the
                    highest standards of professional development and
                    operational integrity.
                  </p>
                </div>
              </div>
            </SplideSlide>
          </SplideTrack>
        </div>

        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>

        {/* <button className="splide__toggle">
          <span className="splide__toggle__play">Play</span>
          <span className="splide__toggle__pause">Pause</span>
        </button> */}
      </Splide>
    </div>
  );
};

export default SpliderHero;
