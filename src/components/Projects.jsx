import React from "react";
import HorizontalLine from "./HorizontalLine";
import ActionAreaCard from "./ProjectCard";
// import pr1 from "../images/pr1.jpg";
// import pr2 from "../images/pr2.jpg";
// import pr3 from "../images/pr3.jpg";
import calc from "../images/calc.jpg";
import RealEstate from "../images/RealEstate.jpg";
import quote from "../images/quote.jpg";

const Projects = () => {
  return (
    <div className="mt-20 ">
      <div className="text-2xl font-semibold text-center xl:text-2xl">
        My work
      </div>
      <HorizontalLine width="w-1/4" />

      <div className="flex flex-col items-center justify-center mx-9 mt-7 sm:flex sm:flex-row sm:gap-5">
        <div className="mt-10">
          <a
            href="https://random-quote-generator-using-api.vercel.app/"
            target="_blank"
          >
            <ActionAreaCard
              image={quote}
              loading="lazy"
              title="Random Quote Generator "
              description="Get inspired daily with our random quote generator and uplifting messages"
            />
          </a>
        </div>

        <div className="mt-10">
          <a href="https://real-estate-guide.vercel.app/" target="_blank">
            <ActionAreaCard
              image={RealEstate}
              loading="lazy"
              title="Real Estate Guide"
              description="Your ultimate real estate guide for buying, selling, and investing in properties."
            />
          </a>
        </div>

        <div className="mt-10 ">
          <a href="https://calculator-using-react-chi.vercel.app/" target="_blank">
          <ActionAreaCard
            image={calc}
            loading="lazy"
            title="React Calculator"
            description="Simplify your calculations with our intuitive React-based calculator for quick results."
          /></a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
