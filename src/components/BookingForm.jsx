import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import secondImage from "../assets/images/AirBalloon-1.jpg";
import airbalonImage from "../assets/images/How-much-does-it-cost-to-travel-to-Luxor.jpg";
import thirdImage from "../assets/images/Luxor-travel-safety-2-1024x585.webp";
import { MdOutlineAddAPhoto, MdModeOfTravel } from "react-icons/md";
import { CiMusicNote1 } from "react-icons/ci";
import { TbPlayVolleyball } from "react-icons/tb";

function BookingForm() {
  return (
    <>
      <div className="w-full h-full text-4xl pt-5">
        <h1 className="font-bold text-center">Book Appointment</h1>
      </div>
      <div className="Form-container flex flex-col lg:flex-row justify-between m-5 h-full space-y-5 lg:space-y-0">
        <div className="right-section flex w-full lg:w-[50%] justify-center items-center order-1 lg:order-2">
          <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} interval={6000}>
            <div>
              <img className="" src={airbalonImage} alt="Hot Air Balloon" />
            </div>
            <div>
              <img src={secondImage} alt="Second Image" />
            </div>
            <div>
              <img src={thirdImage} alt="Third Image" />
            </div>
          </Carousel>
        </div>
        <div className="left-section flex flex-col justify-center items-start w-full lg:w-[40%] mt-5 lg:mt-0 space-y-5 order-2 lg:order-1">
          <div className="w-full">
            <h2 className="font-bold text-2xl text-[#C6783E] text-center">Experience the Adventure of a Lifetime</h2>
            <p className="text-center text-gray-500 text-md">Book your adventure today and take the first step towards an extraordinary experience!</p>
            <div className="flex flex-row w-full gap-5 mt-3 text-white justify-center mb-3">
              <div className="bg-[#C6783E] rounded-full text-5xl lg:text-6xl p-2 lg:p-3">
                <MdOutlineAddAPhoto />
              </div>
              <div className="bg-[#C6783E] rounded-full text-5xl lg:text-6xl p-2 lg:p-3">
                <MdModeOfTravel />
              </div>
              <div className="bg-[#C6783E] rounded-full text-5xl lg:text-6xl p-2 lg:p-3">
                <CiMusicNote1 />
              </div>
              <div className="bg-[#C6783E] rounded-full text-5xl lg:text-6xl p-2 lg:p-3">
                <TbPlayVolleyball />
              </div>
            </div>
            <div className="form w-full">
              <form className="grid grid-cols-2 gap-5">
                <input type="text" placeholder="Name" className="col-span-1 p-2 border border-gray-400 rounded-md" />
                <input type="email" placeholder="Email" className="col-span-1 p-2 border border-gray-400 rounded-md" />
                <input type="number" placeholder="Phone" className="col-span-1 p-2 border border-gray-400 rounded-md" />
                <input type="date" placeholder="Date" className="col-span-1 p-2 border border-gray-400 rounded-md" />
                <input type="time" placeholder="Time" className="col-span-1 p-2 border border-gray-400 rounded-md" />
                <input type="number" placeholder="Number of Guests" className="col-span-1 p-2 border border-gray-400 rounded-md" />
                <textarea placeholder="Additional Message" className="col-span-2 p-2 border border-gray-400 rounded-md"></textarea>
                <button type="submit" className="col-span-2 p-2 bg-[#C6783E] text-white mx-auto w-[200px]">Book Now</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingForm;