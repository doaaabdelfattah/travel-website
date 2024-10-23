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
      <div className="Reviews-container relative w-full h-[70vh] flex flex-col justify-around">
        <div
          className="relative w-full h-full bg-cover bg-center parallax"
          style={{ backgroundImage: `url(${airbalonImage})` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="left-sec absolute top-15 left-0 flex flex-col justify-center items-start text-white w-[40%] ml-[50px] h-full">
          <h2 className="text-3xl font-semibold mb-4 bg-[#]">
            We Provide Top Destinations Especially For You Book Now and Enjoy!
          </h2>
          <div className="flex flex-row items-center justify-center space-x-5">
            <FiPhoneCall size={35} />
            <div className="flex flex-col ">
              <p className="mr-2 text-md">Call Now</p>
              <p className="text-xl">+02 123456789</p>
            </div>
          </div>
        </div>

        <div className="right-sec absolute top-[230px] right-[60px] flex flex-col h-[430px] pb-5 text-black w-[30%] pt-5 bg-white shadow-lg">
          <div className="w-full flex flex-col justify-start items-start mt-8 ml-5">
            <p className="text-sm text-gray-500 tracking-wide">Testimonials</p>
            <h2 className="text-3xl font-bold text-[#C6783E] tracking-wider">
              Travelers Reviews
            </h2>
            <div className="bg-gray-400 w-[70%] h-[1px] mt-2"></div>
          </div>
          <Slider {...settings}>
            <div className="p-4 ">
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                dolor recusandae natus quas voluptas aperiam alias sunt aut
                itaque cum, quasi nam corporis error. Modi nemo voluptatem
                laboriosam sequi incidunt?
              </p>
              <div className="flex items-center  justify-start mt-4">
                <img
                  src={userImage}
                  alt="user"
                  className="w-[50px] h-[50px] rounded-full mr-4"
                />
                <div>
                  <div className="flex ">
                    <IoStarSharp className="text-yellow-400" />
                    <IoStarSharp className="text-yellow-400" />
                    <IoStarSharp className="text-yellow-400" />
                    <IoStarSharp className="text-yellow-400" />
                    <IoStarSharp className="text-yellow-400" />
                  </div>
                  <h2 className="text-lg font-bold tracking-wide">
                    Nada Shaban
                  </h2>
                  <p className="tracking-wide">Guest Reviews</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-500">
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
                  <h2 className="text-lg font-bold tracking-wide">
                    Jane Smith
                  </h2>
                  <p className="tracking-wide">Guest Reviews</p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-500">
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
                  <h2 className="text-lg font-bold tracking-wide">
                    Alice Johnson
                  </h2>
                  <p className="tracking-wide">Guest Reviews</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Reviews;
