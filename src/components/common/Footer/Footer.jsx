import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-hover-color px-10 py-[40px] flex border-t-[1.5px] border-white/[0.2] flex-wrap lg:flex-nowrap gap-10 justify-between items-center " id="contactus">
      {/* ==== Left Section ======== */}
      <div className="flex justify-start items-center  w-full md:w-4/12">
        <div className="ml-10 my-10 text-white flex justify-center flex-col ">
          <h1 className="uppercase text-center font-bold text-6xl">Travel</h1>
          <h1 className="uppercase text-center text-4xl">tours</h1>
          <p className="mt-5 font-light line-clamp-4">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
            efficitur vulputate lorem magnis quam. Cras leo volutpat neque mus
            et torquent nunc interdum. Fames ac
          </p>
          {/* ========= ICONS ======== */}
          <div className="flex justify-center mt-6 text-4xl gap-5">
            <span>
              <FaFacebook />
            </span>
            <span>
              <AiFillInstagram />
            </span>
          </div>
        </div>
      </div>

      {/* ============ Middle Section ========== */}
      <div className="flex flex-col justify-center items-center w-full md:w-4/12">
        <h1 className="text-4xl font-semibold py-5 text-white">Quick Link</h1>
        <ul className="flex-col gap-8 items-center text-white justify-center uppercase tracking-wide ">
          <li className="cursor-pointer hover:text-gray-500 relative p-2">
            <NavLink to={"/"} className="cursor-pointer">
              Home
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <NavLink
              to={"/aboutus"}
              className={({ isActive }) =>
                isActive ? "active-menu" : "cursor-pointer"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <NavLink
              to={"/tours"}
              className={({ isActive }) =>
                isActive ? "active-menu" : "cursor-pointer"
              }
            >
              Tours
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <NavLink
              to={"/booking"}
              className={({ isActive }) =>
                isActive ? "active-menu" : "cursor-pointer"
              }
            >
              Booking
            </NavLink>
          </li>
          <li className="cursor-pointer hover:text-hover-color p-2 relative">
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "active-menu" : "cursor-pointer"
              }
            >
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-4/12">
        <h1 className="text-4xl font-semibold py-5">Contact Us</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-5 items-center">
            <span>
              <IoCall />
            </span>
            <p>01234566789</p>
          </div>
          <div className="flex gap-5 justify-start items-center">
            <span>
              <MdEmail />
            </span>
            <p>email@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
