import React from "react";
import AboutImage from "../images/AboutImage.jpg";
import HorizontalLine from "./HorizontalLine";

const About = () => {
  return (

    
    <div className="container flex flex-col px-1 mx-auto mt-32 md:flex md:flex-row-reverse lg:items-center lg:justify-center lg:gap-24 xl:gap-60">

      
      <div className="mx-6 xl:mx-11 xl:mr-20">
        <div className="items-center justify-center text-2xl font-semibold text-center sm:text-3xl lg:text-3xl xl:text-2xl">
          About me
        </div>
        <div>
          <HorizontalLine width="w-1/4" />
        </div>
        <div className="mt-8 font-medium sm:text-xl md:text-lg md:w-96 md:mt-10 md:leading-8 sm:leading-8 lg:mt-7">
          My name is Aditya Dilip Deolalikar and I am currently pursuing B.Tech
          degree in Artificial Intelligence and Data Science at KK Wagh College
          of Engineering. Over the past year, I have been deeply immersed in the
          world of web development, honing my skills and building a solid
          foundation in this exciting field.
        </div>
      </div>

      <div className="w-auto h-auto mx-auto mt-20 sm:w-3/4 lg:w-96 lg:mt-2 ">
        <img src={AboutImage} alt="" />
      </div>

      
    </div>
  );
};

export default About;
