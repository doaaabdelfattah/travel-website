import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed h-[150px] w-full border-b-[1.5px] border-white/[0.2] flex justify-between items-center p-[50px] z-50
    ${isScrolled ? "bg-gray-200/50 shadow-md" : "bg-transparent"}
    `}
    >
      {/* Logo */}
      <div className="ml-10 my-10 text-white">
        <h1 className="uppercase text-center font-bold text-6xl">Travel</h1>
        <h1 className="uppercase text-center text-4xl">tours</h1>
      </div>
      {/* Menu */}
      <div className="mr-[90px]">
        <ul className="flex gap-8 items-center text-white justify-center text-lg font-semibold uppercase tracking-wide ">
          <li className="cursor-pointer hover:text-hover-color relative p-2">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isScrolled ? "text-black" : "text-white"} ${
                  isActive ? "active-menu" : "cursor-pointer"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <NavLink
              to={"/aboutus"}
              className={({ isActive }) =>
                `${isScrolled ? "text-black" : "text-white"} ${
                  isActive ? "active-menu" : "cursor-pointer"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <NavLink
              to={"/tours"}
              className={({ isActive }) =>
                `${isScrolled ? "text-black" : "text-white"} ${
                  isActive ? "active-menu" : "cursor-pointer"
                }`
              }
            >
              Tours
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <NavLink
              to={"/booking"}
              className={({ isActive }) =>
                `${isScrolled ? "text-black" : "text-white"} ${
                  isActive ? "active-menu" : "cursor-pointer"
                }`
              }
            >
              Booking
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${isScrolled ? "text-black" : "text-white"} ${
                  isActive ? "active-menu" : "cursor-pointer"
                }`
              }
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Icons */}
      <div className="flex justify-end items-center gap-5 mr-5 text-white ">
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
    </div>
  );
};

export default NavBar;
