import React from "react";
import webdev from "../images/webdev.png";
import Button from "@mui/material/Button";
import { Link, animateScroll as scroll } from "react-scroll";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center h-full min-h-full pt-16 sm:gap-14 xl:gap-10 sm:justify-between sm:flex-row mt-28 justify-normal mx-7 md:mx-28 md:mt-12 xl:p-16">
        <div className="sm:w-96 md:w-6/12 md:leading-7 2xl:leading-10">
          <span className="font-semibold text-transparent 2xl:text-2xl bg-gradient-to-r from-blue-900 via-blue-900 to-indigo-900 bg-clip-text">
            Hey, I am
          </span>{" "}
          <br />
          <span className="inline-block text-3xl font-bold text-transparent sm:text-3xl md:text-5xl 2xl:text-7xl bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-800 bg-clip-text">
            Aditya Deolalikar
          </span>{" "}
          <br />
          <span className="text-xl font-medium 2xl:text-2xl md:text-lg">
            Web developer | Pursuing Artificial Intelligence and Data Science |
          </span>
          <div className="flex gap-5 mt-4">
            <div>
              <Button size="small" variant="outlined">
                <Link to="AboutSection" smooth={true} duration={500}>About me</Link>
              </Button>
            </div>
            <div>
              <Button size="small" variant="outlined">
                Resume
              </Button>
            </div>
          </div>
        </div>

        <div className="w-auto h-auto mt-16 rounded-lg sm:w-60 sm:h-48 bg-slate-400 md:h-70 md:w-70">
          <img src={webdev} alt="" />
        </div>
      </div>
      {/* <hr className="h-px my-32 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
      {/* <hr className="h-px my-32 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
    </>
  );
};

export default Hero;
