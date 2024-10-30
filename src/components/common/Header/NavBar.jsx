import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { CiMenuBurger } from "react-icons/ci";
import { useSelector } from "react-redux";
import {logout} from '../../../redux/reducers/AuthSlice';

import { useDispatch } from "react-redux";



const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user} = useSelector( (state) => state.auth);
  console.log(user);
  const dispatch = useDispatch();





  const handlelogout = () => {
    dispatch(logout());
  };


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed h-[90px] w-full border-b-[1.5px] border-white/[0.2] flex justify-between items-center p-[10px] z-[99]
    ${isScrolled ? "bg-gray-200/50 shadow-md" : "bg-transparent"}
    `}
    >
      {/* Logo */}
      <div className="text-white">
        <h1 className={`${isScrolled ? "text-black" : "text-white"} uppercase text-center font-bold text-4xl`}>Travel</h1>
        <h1 className={`${isScrolled ? "text-black" : "text-white"} uppercase text-center text-2xl`}>tours</h1>
      </div>

      {/* Menu */}
      <div className="mr-[90px] hidden md:flex">
        <ul className="flex gap-8 items-center text-white justify-center text-md font-semibold uppercase tracking-wide">
          <li className="cursor-pointer relative p-2">
            <ScrollLink
              to="Hero"
              smooth={true}
              duration={100}
              offset={-90}
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              Home
            </ScrollLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <ScrollLink
              to="aboutus"
              smooth={true}
              duration={100}
              offset={-90}
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              About Us
            </ScrollLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <ScrollLink
              to="cards"
              smooth={true}
              duration={100}
              offset={-90}
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              Trips
            </ScrollLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <ScrollLink
              to="booking"
              smooth={true}
              duration={100}
              offset={-90}
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              Booking
            </ScrollLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <ScrollLink
              to="Reviews"
              smooth={true}
              duration={100}
              offset={-90}
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              Reviews
            </ScrollLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <ScrollLink
              to="contactus"
              smooth={true}
              duration={100}
              className={`${isScrolled ? "text-black" : "text-white"} cursor-pointer`}
            >
              Contact us
            </ScrollLink>
          </li>
        </ul>
      </div>

      {/* Icons */}
      <div className={`${isScrolled ? "text-black" : "text-white"} justify-end items-center gap-3  hidden sm:flex`}>
        <span className="hover:text-hover-color cursor-pointer">
          <FaMagnifyingGlass size="20px" />
        </span>
        <span className="hover:text-hover-color cursor-pointer">
          <FaShoppingCart size="20px" />
        </span>
        <span className="hover:text-hover-color cursor-pointer">
          <FaUser size="20px" />
        </span>
       
        <span className="text-[15px] items-center text-center">
        {user ?  (
          <h1>Welcome {user.name}!</h1>
        ) : (
          <h1>Welcome, Guest!</h1>
        )}
      </span>
      {user ? (
        <button onClick={handlelogout} className="text-white bg-[#C6783E] px-3 py-1 rounded-lg">Logout</button>
      ) : (
        <NavLink to="/login" className="text-white bg-[#C6783E] px-3 py-1 rounded-lg">Login</NavLink>
      )
      }
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden w-full h-full font-bold relative">
        <button
          className={`${isScrolled ? "text-black" : "text-white"} text-4xl absolute right-0`}
          onClick={toggleMenu}
        >
          <CiMenuBurger />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 h-full w-[250px] bg-gray-800 text-black flex flex-col items-start p-5 md:hidden z-50">
          <ul className="flex flex-col gap-4 items-start text-lg font-semibold uppercase tracking-wide">
            <li className="cursor-pointer p-2">
              <ScrollLink
                to="Hero"
                smooth={true}
                duration={100}
                offset={-90}
                className="text-white cursor-pointer"
                onClick={closeMenu}
              >
                Home
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-hover-color p-2">
              <ScrollLink
                to="aboutus"
                smooth={true}
                duration={100}
                offset={-90}
                className="text-white cursor-pointer"
                onClick={closeMenu}
              >
                About Us
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-hover-color p-2">
              <ScrollLink
                to="cards"
                smooth={true}
                duration={100}
                offset={-90}
                className="text-white cursor-pointer"
                onClick={closeMenu}
              >
                Trips
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-hover-color p-2">
              <ScrollLink
                to="booking"
                smooth={true}
                duration={100}
                offset={-90}
                className="text-white cursor-pointer"
                onClick={closeMenu}
              >
                Booking
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-hover-color p-2">
              <ScrollLink
                to="Reviews"
                smooth={true}
                duration={100}
                offset={-90}
                className="text-white cursor-pointer"
                onClick={closeMenu}
              >
                Reviews
              </ScrollLink>
            </li>
            <li className="cursor-pointer hover:text-hover-color p-2 relative">
              <ScrollLink
                to="contactus"
                smooth={true}
                duration={100}
                offset={-70}
                className="text-white cursor-pointer"
                onClick={closeMenu}
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