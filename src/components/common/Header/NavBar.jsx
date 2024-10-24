import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed h-[90px] w-full border-b-[1.5px] border-white/[0.2] flex justify-between items-center p-[30px] z-[99]
    ${isScrolled ? "bg-gray-200/50 shadow-md" : "bg-transparent"}
    `}
    >
      {/* Logo */}
      <div className="text-white">
        <h1 className="uppercase text-center font-bold text-4xl">Travel</h1>
        <h1 className="uppercase text-center text-2xl">tours</h1>
      </div>

      {/* Menu */}
      <div className="mr-[90px] hidden md:flex">
        <ul className="flex gap-8 items-center text-white justify-center text-lg font-semibold uppercase tracking-wide">
          <li className="cursor-pointer relative p-2">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isScrolled ? "text-black" : "text-white"} ${
                  isActive && !isMenuOpen ? "active-menu" : "cursor-pointer"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
          <a
              href="#general-home"
              smooth={true}
              duration={500}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } cursor-pointer`}
            >
              About Us
            </a>
            {/* <ScrollLink
              to="aboutus"
              smooth={true}
              duration={500}
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              About Us
            </ScrollLink> */}
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">

          <a
              href="#cards-home"
              smooth={true}
              duration={400}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } cursor-pointer`}
            >
              Trips
            </a>
            {/* <ScrollLink
              to="cards"
              smooth={true}
              duration={500}
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              Trips
            </ScrollLink> */}
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <a
              href="#booking-home"
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              Booking
            </a>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <ScrollLink
              to="contactus"
              smooth={true}
              duration={500}
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              Contact us
            </ScrollLink>
          </li>
        </ul>
      </div>

      {/* Icons */}
      <div className="justify-end items-center gap-5 mr-5 text-white hidden sm:flex">
        <span className="hover:text-hover-color cursor-pointer">
          <FaMagnifyingGlass size="25px" />
        </span>
        <span className="hover:text-hover-color cursor-pointer">
          <FaShoppingCart size="25px" />
        </span>
        <span className="hover:text-hover-color cursor-pointer">
          <FaUser size="25px" />
        </span>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden w-full h-full font-bold relative">
        <button className="text-white text-4xl absolute right-0" onClick={toggleMenu}><CiMenuBurger /></button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-[250px] bg-gray-800 text-black flex flex-col items-start p-5 md:hidden z-50">
          {/* <button className="bg-white rounded-full justify-center items-center h-10 w-10 absolute right-0 mr-2" onClick={toggleMenu}>X</button> */}
          <ul className="flex flex-col gap-4 items-start text-lg font-semibold uppercase tracking-wide">
            <li className="cursor-pointer p-2">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isScrolled ? "text-black" : "text-white"} ${
                    isActive && !isMenuOpen ? "active-menu" : "cursor-pointer"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer hover:text-hover-color p-2">
              <ScrollLink
                to="aboutus"
                smooth={true}
                duration={500}
                className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
              >
                About Us
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-hover-color p-2">
              <ScrollLink
                to="cards"
                smooth={true}
                duration={500}
                className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
              >
                Trips
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-hover-color p-2">
              <a
                href="#booking-home"
                className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
              >
                Booking
              </a>
            </li>
            <li className="cursor-pointer hover:text-hover-color p-2">
              <ScrollLink
                to="contactus"
                smooth={true}
                duration={500}
                className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
              >
                Contact us
              </ScrollLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;