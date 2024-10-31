import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import secondImage from "../assets/images/AirBalloon-1.jpg";
import airbalonImage from "../assets/images/How-much-does-it-cost-to-travel-to-Luxor.jpg";
import thirdImage from "../assets/images/Luxor-travel-safety-2-1024x585.webp";
import { FaUserFriends } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCheckCircle } from "react-icons/md";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUmbrellaBeach,
  FaUtensils,
  FaWifi,
  FaCar,
} from "react-icons/fa";

import { MdOutlineLocalParking, MdOutlinePets } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const availableTimes = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];
  const [isAvailable, setIsAvailable] = useState(false);
  const [colorAvailable, setColorAvailable] = useState("bg-[#C6783E]");
const navigate = useNavigate();
  const handleconfirmation = () => {
    navigate('/confirmation');
  };
  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Set the selected date
  };

  const handleCheckAvailability = () => {
    setIsAvailable((prev) => !prev);
    setColorAvailable((prev) =>
      prev === "bg-[#C6783E]" ? "bg-green-500" : "bg-[#C6783E]"
    );
  };

  handleCheckAvailability;
  return (
    <>
      <div
        className="container mx-auto w-[100%]  flex justify-center items-center py-[30px] mt-[120px] "
        id="booking"
      >
        <div className="Form-container flex flex-col lg:flex-row justify-between items-start h-full lg:space-y-0">
          <div className="right-section flex w-full lg:w-[50%] justify-center items-center order-1 lg:order-2 mt-3 ">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={6000}
              className="h-full"
            >
              <div className="image-container">
                <img
                  className="carousel-image"
                  src={airbalonImage}
                  alt="Hot Air Balloon"
                />
              </div>
              <div className="image-container">
                <img
                  className="carousel-image"
                  src={secondImage}
                  alt="Second Image"
                />
              </div>
              <div className="image-container">
                <img
                  className="carousel-image"
                  src={thirdImage}
                  alt="Third Image"
                />
              </div>
            </Carousel>
          </div>
          <div className="left-section flex flex-col w-full lg:w-[40%]  lg:mt-0 space-y-2 order-2 lg:order-1">
            <div className="w-full">
              <div className=" py-3 text-black">
                <h2 className="text-4xl font-semibold tracking-widest text-[#C6783E]">
                  Luxor Tour
                </h2>

                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-white" />
                  <h2 className="text-gray-400 text-sm ml-2 ">Reviews</h2>
                </div>
                <div className="mt-1">
                  <h5 className="text-md text-gray-600 font-normal">
                    Most Popular Facilities
                  </h5>
                  <div className="flex flex-row flex-wrap gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      <IoMdTime className="text-green-700" />
                      <h2 className="text-md">10 Days</h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaRegUser />
                      <h2 className="text-md">6+ People</h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <SlLocationPin className="text-blue-500 font-bold" />
                      <h2 className="text-md">
                        Naama Bay, Sharm El Sheikh, Egypt
                      </h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-red-500" />
                      <h2 className="text-md">Hot Air Balloon Over Desert</h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="text-purple-600" />
                      <h2 className="text-md">Available Weekends</h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaUmbrellaBeach className="text-orange-400" />
                      <h2 className="text-md">Beach Access</h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaUtensils className="text-red-600" />
                      <h2 className="text-md">Free Breakfast</h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaWifi className="text-blue-400" />
                      <h2 className="text-md">Free Wi-Fi</h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <MdOutlineLocalParking className="text-gray-700" />
                      <h2 className="text-md">Parking Available</h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <MdOutlinePets className="text-pink-500" />
                      <h2 className="text-md">Pet Friendly</h2>
                    </div>

                    <div className="flex items-center gap-1">
                      <FaCar className="text-indigo-600" />
                      <h2 className="text-md">Free Shuttle</h2>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-300 h-[1px] w-[60%] hover-line mb-3 mt-3"></div>
                <div>
                  <h2 className="text-md text-bold">Discription :</h2>
                  <p className="text-gray-500 text-md">
                    Embark on an unforgettable journey with our exclusive Luxor
                    Tour. Whether you're an adventure seeker or a history
                    enthusiast, this tour offers something for everyone. Enjoy a
                    10-day exploration of Luxor, guided by experienced
                    professionals. Our booking form allows you to easily secure
                    your spot, select your preferred date and time, and
                    customize your experience with options for adults and
                    children. Don't miss out on this extraordinary opportunity
                    to discover the wonders of Luxor. Book your adventure today
                    and take the first step towards an extraordinary experience!
                  </p>
                </div>
              </div>
              <div className="bg-gray-300 h-[1px] w-[60%] mb-3 text-center"></div>
              {/* <div className="my-3 ">
                <h2 className="font-bold text-4xl py-5 text-[#C6783E]">
                  Experience the Adventure of a Lifetime
                </h2>
                <p className="text-gray-500 text-md">
                  Book your adventure today and take the first step towards an extraordinary experience!
                </p>
              </div> */}
              <div className="form w-full flex justify-start items-start">
                <form className="flex flex-row gap-3">
                  {/* <div className="flex-col gap-1 flex">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      className="col-span-1 p-3 border border-gray-400 rounded-md"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div> */}
                  {/* <div className="flex-col gap-1 flex">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="col-span-1 p-3 border border-gray-400 rounded-md"
                      name="email"
                      id="email"
                    />
                  </div> */}
                  {/* <div className="flex-col gap-1 flex">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      placeholder="Phone"
                      className="col-span-1 p-3 border border-gray-400 rounded-md"
                      name="phone"
                    />
                  </div> */}
                  <div className="col-span-1 flex-col gap-1 flex">
                    <label htmlFor="date" className="flex items-center gap-2">
                      <MdOutlineDateRange size="20px" className="font-bold" />
                      Date
                    </label>

                    <input
                      type="date"
                      placeholder="Date"
                      className="col-span-1 p-3 border border-gray-400 rounded-md"
                      name="date"
                      id="date"
                      onChange={handleDateChange}
                    />
                  </div>
                  {selectedDate && (
                    <div className="col-span-2">
                      <h3 className="font-semibold text-lg mt-4">
                        Available Times for {selectedDate}:
                      </h3>
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        {availableTimes.map((time, index) => (
                          <button
                            key={index}
                            className="p-3 bg-gray-200 rounded-lg hover:bg-[#C6783E] hover:text-white transition"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="col-span-1 flex-col gap-1 flex">
                    <label htmlFor="adults" className="flex items-center gap-2">
                      <FaUserFriends size="20px" />
                      Adults
                    </label>
                    <input
                      type="number"
                      placeholder="Number of Adults"
                      className="p-3 border border-gray-400 rounded-md"
                      id="adults"
                    />
                  </div>
                  <div className="col-span-1 flex-col gap-1 flex">
                    <label
                      htmlFor="children"
                      className="flex items-center gap-2"
                    >
                      <FaChildren size="20px" />
                      Children
                    </label>
                    <input
                      type="number"
                      placeholder="Number of Children"
                      className="p-3 border border-gray-400 rounded-md"
                      id="children"
                    />
                  </div>
                  {/* <div className="col-span-2 flex-col gap-1 flex w-full">
                    <label htmlFor="note">Note</label>
                    <textarea
                      placeholder="Additional Message"
                      className="p-2 border border-gray-400 rounded-md w-full"
                      name="notes"
                    ></textarea>
                  </div> */}
                </form>
              </div>
              <button
                onClick={handleCheckAvailability}
                type="submit"
                className={`p-2 relative ${colorAvailable} text-white mx-auto mt-5 w-[200px] flex items-center justify-center rounded-lg transition-colors`}
              >
                {isAvailable ? (
                  <>
                    <span className="mr-2">Available</span>
                    <MdOutlineCheckCircle size={20} />
                  </>
                ) : (
                  <>
                    <span className="mr-2">Check availability</span>
                    <IoIosArrowDown size={20} />
                  </>
                )}
              </button>
            </div>
            <div
              className={`secform w-full mx-auto flex justify-center items-center ${
                isAvailable ? "hidden" : "hidden"
              }`}
            >
              <form className="grid grid-cols-1 md:grid-cols-2  gap-3 w-full">
                <div className="flex-col gap-1 flex">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="col-span-1 p-3 border border-gray-400 rounded-md"
                    name="name"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="flex-col gap-1 flex">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="col-span-1 p-3 border border-gray-400 rounded-md"
                    name="email"
                    id="email"
                  />
                </div>
                <div className="flex-col gap-1 flex">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="number"
                    placeholder="Phone"
                    className="col-span-1 p-3 border border-gray-400 rounded-md"
                    name="phone"
                  />
                </div>
                {/* <div className="col-span-1 flex-col gap-1 flex">
                
               <label htmlFor="date" className="flex items-center gap-2">
             <MdOutlineDateRange size="20px" className="font-bold" /> 
              Date
              </label>
                  
                    <input
                      type="date"
                      placeholder="Date"
                      className="col-span-1 p-3 border border-gray-400 rounded-md"
                      name="date"
                      id="date"
                      onChange={handleDateChange}
                    />
                  </div> */}
                {/* {selectedDate && (
                    <div className="col-span-2">
                      <h3 className="font-semibold text-lg mt-4">
                        Available Times for {selectedDate}:
                      </h3>
                      <div className="grid grid-cols-3 gap-3 mt-3">
                        {availableTimes.map((time, index) => (
                          <button
                            key={index}
                            className="p-3 bg-gray-200 rounded-lg hover:bg-[#C6783E] hover:text-white transition"
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="col-span-1 flex-col gap-1 flex"> */}
                {/* <label htmlFor="adults" className="flex items-center gap-2">
                      <FaUserFriends size="20px" />
                      Adults
                    </label>
                    <input
                      type="number"
                      placeholder="Number of Adults"
                      className="p-3 border border-gray-400 rounded-md"
                      id="adults"
                    />
                  </div> */}
                {/* <div className="col-span-1 flex-col gap-1 flex">
                    <label htmlFor="children" className="flex items-center gap-2">
                      <FaChildren size="20px" />
                      Children
                    </label>
                    <input
                      type="number"
                      placeholder="Number of Children"
                      className="p-3 border border-gray-400 rounded-md"
                      id="children"
                    />
                  </div> */}

                <div className="col-span-2 flex-col gap-1 flex w-full">
                  <label htmlFor="note">Note</label>
                  <textarea
                    placeholder="Additional Message"
                    className="p-2 border border-gray-400 rounded-md w-full"
                    name="notes"
                  ></textarea>
                </div>
              </form>
            </div>
            <button onClick={handleconfirmation}
            className="p-2 bg-[#C6783E] text-white mx-auto mt-5 w-[200px] flex items-center justify-center rounded-lg transition-colors">
              Book Now{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
