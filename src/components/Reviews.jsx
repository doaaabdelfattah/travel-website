import React from "react";
import airbalonImage from "../assets/images/AirBalloon-1.jpg";
import userImage from "../assets/images/7c453e91f0f26c1d76ccd7c38f8865cf.png";
import { FiPhoneCall } from "react-icons/fi";
import { IoStarSharp } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import { MdOutlineAddAPhoto, MdModeOfTravel } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { TbPlayVolleyball } from "react-icons/tb";

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false, // Disable arrows
  };

  return (
    <>
      <div className="Reviews-container relative w-full h-[100vh] flex flex-col lg:flex-row" id="Reviews">
        <div
          className="relative w-full h-full bg-cover bg-center parallax flex flex-col lg:flex-row justify-around items-center"
          style={{ backgroundImage: `url(${airbalonImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="left-sec relative flex flex-col justify-center items-start text-white w-full lg:w-[40%] p-5 lg:ml-[50px] h-full">
            {/* Responsive font sizes */}
            <h2 className="text-2xl lg:text-3xl font-semibold mb-4">
              We Provide Top Destinations Especially For You Book Now and Enjoy!
            </h2>
            <div className="flex flex-row items-center justify-center space-x-5">
              <FiPhoneCall size={35} />
              <div className="flex flex-col">
                <p className="mr-2 text-sm lg:text-md">Call Now</p>
                <p className="text-lg lg:text-xl">+02 123456789</p>
              </div>
            </div>
          </div>

          <div className="right-sec relative flex flex-col h-auto lg:h-[430px] pb-[30px] text-black w-[90%] lg:w-[30%] pt-2 bg-white shadow-lg mb-8 lg:mt-0">
            <div className="w-full flex flex-col justify-start items-start mt-8 ml-5">
              <p className="text-sm text-gray-500 tracking-wide">Testimonials</p>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#C6783E] tracking-wider">
                Travelers Reviews
              </h2>
              <div className="bg-gray-400 w-[70%] h-[1px] mt-2"></div>
            </div>
            <Slider {...settings}>
              <div className="p-4">
                <p className="text-gray-500 text-sm lg:text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                  dolor recusandae natus quas voluptas aperiam alias sunt aut
                  itaque cum, quasi nam corporis error. Modi nemo voluptatem
                  laboriosam sequi incidunt?
                </p>
                <div className="flex items-center justify-start mt-4">
                  <img
                    src={userImage}
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full mr-4"
                  />
                  <div>
                    <div className="flex">
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                    </div>
                    <h2 className="text-md lg:text-lg font-bold tracking-wide">
                      Nada Shaban
                    </h2>
                    <p className="tracking-wide text-sm">Guest Reviews</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm lg:text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti eos architecto laboriosam odit quos nostrum perferendis
                  doloribus illum? Dignissimos at, incidunt distinctio error animi
                  doloremque quaerat temporibus atque odit cumque.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={userImage}
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full mr-4"
                  />
                  <div>
                    <div className="flex">
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                    </div>
                    <h2 className="text-md lg:text-lg font-bold tracking-wide">
                      Jane Smith
                    </h2>
                    <p className="tracking-wide text-sm">Guest Reviews</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm lg:text-md">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laudantium, alias. Ea, aliquid consequuntur! Error animi impedit
                  aperiam officiis? Porro cum culpa quidem error ex assumenda
                  magni est molestias autem aperiam.
                </p>
                <div className="flex items-center mt-4">
                  <img
                    src={userImage}
                    alt="user"
                    className="w-[50px] h-[50px] rounded-full mr-4"
                  />
                  <div>
                    <div className="flex">
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                      <IoStarSharp className="text-yellow-400" />
                    </div>
                    <h2 className="text-md lg:text-lg font-bold tracking-wide">
                      Alice Johnson
                    </h2>
                    <p className="tracking-wide text-sm">Guest Reviews</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reviews;