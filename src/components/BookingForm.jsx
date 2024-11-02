import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import secondImage from "../assets/images/AirBalloon-1.jpg";
import airbalonImage from "../assets/images/How-much-does-it-cost-to-travel-to-Luxor.jpg";
import thirdImage from "../assets/images/Luxor-travel-safety-2-1024x585.webp";
import { useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineCheckCircle } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
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
  const [adultsQty, setAdultsQty] = useState(0);
  const [childrenQty, setChildrenQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [closecartTab , setcloseCartTap] = useState(false);
  const handleCloseCart = () => {
    setcloseCartTap(true)
  }
  const handleToCart = () => {
    navigate('/cartpage');
  }
  const increaseQty = (type) => {
    if (type === "adults") {
      setAdultsQty(adultsQty + 1);
      setTotalPrice(totalPrice + 210);
    } else if (type === "children") {
      setChildrenQty(childrenQty + 1);
      setTotalPrice(totalPrice + 150);
    }
  };
  const decreaseQty = (type) => {
    if (type === "adults" && adultsQty > 0) {
      setAdultsQty(adultsQty - 1);
      setTotalPrice(totalPrice - 210);
    } else if (type === "children" && childrenQty > 0) {
      setChildrenQty(childrenQty - 1);
      setTotalPrice(totalPrice - 150);
    }
  };
  const handleconfirmation = () => {
    navigate("/confirmation");
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
   

   <div className={`CartTab h-full absolute w-[350px] right-0 top-[100px] z-50 ${closecartTab ? 'hidden' : 'block'} bg-gray-50 transform translate-x-0`}>
  {/* Close Button */}
  <div className="flex justify-start p-4">
    <button onClick={handleCloseCart} className="text-gray-500 text-lg">x</button>
  </div>

  {/* Trip Cards Container */}
  <div className="px-4 space-y-4 mb-10 overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
    <div className="tripcard bg-gray-100 p-2 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-[#C6783E]">Luxor Trip</h3>
      <p className="text-gray-700">Location: Luxor, Egypt</p>
      <p className="text-gray-700">Start Date: 21-12-2020</p>
      <p className="text-gray-700">End Date: 21-12-2020</p>
      <p className="text-gray-700">Number of People: 2</p>
      <p className="text-gray-700">Duration: 30 Minutes</p>
      <p className="text-gray-700">Price: $150</p>
    </div>
    <div className="tripcard bg-gray-100 p-2 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-[#C6783E]">Luxor Trip</h3>
      <p className="text-gray-700">Location: Luxor, Egypt</p>
      <p className="text-gray-700">Start Date: 21-12-2020</p>
      <p className="text-gray-700">End Date: 21-12-2020</p>
      <p className="text-gray-700">Number of People: 2</p>
      <p className="text-gray-700">Duration: 30 Minutes</p>
      <p className="text-gray-700">Price: $150</p>
    </div>
    <div className="tripcard bg-gray-100 p-2 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-[#C6783E]">Luxor Trip</h3>
      <p className="text-gray-700">Location: Luxor, Egypt</p>
      <p className="text-gray-700">Start Date: 21-12-2020</p>
      <p className="text-gray-700">End Date: 21-12-2020</p>
      <p className="text-gray-700">Number of People: 2</p>
      <p className="text-gray-700">Duration: 30 Minutes</p>
      <p className="text-gray-700">Price: $150</p>
    </div>
    {/* Add more trip cards as needed */}
  </div>

  {/* Bottom Buttons */}
  <div className="flex justify-around items-center p-4 bg-gray-50 absolute bottom-0 w-full">
    <button  onClick={handleToCart}
    className="text-white rounded-lg bg-black px-4 py-2">View Cart</button>
    <button className="text-white rounded-lg bg-[#C6783E] px-4 py-2">Check Out</button>
  </div>
</div>


      <div
        className="container mx-auto w-[100%] relative flex justify-center items-center py-[30px] mt-[120px] "
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
              <div className="form w-full flex justify-start items-start">
                <form className="flex flex-row gap-3">
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
                  <div className="col-span-2 flex-col gap-1 flex w-full">
                    <label htmlFor="time">Time</label>
                    <input
                      type="time"
                      placeholder="Time"
                      className="p-3 border border-gray-400 rounded-md"
                      name="time"
                      id="time"
                    />
                  </div>
                </form>
                <button
                  onClick={handleCheckAvailability}
                  type="submit"
                  className={`p-2 relative ${colorAvailable} text-white mx-auto mt-9 ml-2 w-[180px] flex items-center justify-center rounded-lg transition-colors`}
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
            <div className={`mt-5 ${isAvailable ? "block" : "hidden"} `}>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 text-left">Name</th>
                    <th className="py-2 text-left">Price</th>
                    <th className="py-2 text-left">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">Adults</td>
                    <td className="py-2">$210</td>
                    <td className="py-2 flex items-center">
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() => decreaseQty("adults")}
                      >
                        -
                      </button>
                      <span className="px-4">{adultsQty}</span>
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() => increaseQty("adults")}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">Children</td>
                    <td className="py-2">$150</td>
                    <td className="py-2 flex items-center">
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() => decreaseQty("children")}
                      >
                        -
                      </button>
                      <span className="px-4">{childrenQty}</span>
                      <button
                        className="px-2 py-1 bg-gray-300 rounded"
                        onClick={() => increaseQty("children")}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4">
                <p className="text-lg font-semibold">
                  Total Quantity: {adultsQty + childrenQty}
                </p>
                <p className="text-lg font-semibold">
                  Total Price: ${totalPrice}
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-1">
              <button
                onClick={handleconfirmation}
                className={`mt-5 ${
                  isAvailable ? "block" : "hidden"
                } p-2 bg-black text-white w-[60px] flex items-center justify-center rounded-lg transition-colors`}
              >
                <FaShoppingCart />
              </button>
              <button
                onClick={handleconfirmation}
                className={`mt-5 ${
                  isAvailable ? "block" : "hidden"
                } p-2 bg-[#C6783E] text-white w-[180px] flex items-center justify-center rounded-lg transition-colors`}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingForm;
