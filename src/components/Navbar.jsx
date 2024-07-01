import React, { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import Hamburger from "hamburger-react";
import { TbHexagonLetterA } from "react-icons/tb";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <nav className="sticky w-full shadow-md h-11">
      <div className="flex items-center justify-between px-8 mt-4 ">
        <div className="text-base font-semibold scale-150 sm:text-base md:text-lg sm:px-8 ">
          <TbHexagonLetterA />
        </div>

        <div>
          <ul className="hidden sm:flex sm:gap-20 sm:font-semibold sm:px-8 sm:text-sm">
            <Link to="AboutSection" smooth={true} duration={500}>
              <li className="duration-200 hover:scale-125">
                <a href="#">About</a>
              </li>
            </Link>

            <Link to="ProjectSection" smooth={true} duration={500}>
              <li className="duration-200 hover:scale-125">
                <a href="#">Projects</a>
              </li>
            </Link>

            <Link to="ContactMeSection" smooth={true} duration={500}>
              <li className="duration-200 hover:scale-125">
                <a href="#">Contact me</a>
              </li>
            </Link>
          </ul>

          <div className="sm:hidden">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </div>
        </div>
      </div>

      {isOpen ? (
        <div>
          <ul className="p-4 list-none sm:hidden">
            <Link to="AboutSection" smooth={true} duration={500}>
              <li className="py-2 font-semibold">
                <a href="#">About</a>
              </li>
            </Link>

            <Link to="ProjectSection" smooth={true} duration={500}>
              <li className="py-2 font-semibold">
                <a href="#">Projects</a>
              </li>
            </Link>

            <Link to="ContactMeSection" smooth={true} duration={500}>
              <li className="py-2 font-semibold">
                <a href="#">Contact me</a>
              </li>
            </Link>
          </ul>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Navbar;
