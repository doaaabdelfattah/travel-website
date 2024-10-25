import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import secondImage from "../assets/images/AirBalloon-1.jpg";
import airbalonImage from "../assets/images/How-much-does-it-cost-to-travel-to-Luxor.jpg";
import thirdImage from "../assets/images/Luxor-travel-safety-2-1024x585.webp";
import { FaUserFriends } from "react-icons/fa";
import { FaChildren } from "react-icons/fa6";
import { useState } from "react";

function BookingForm() {
  const [selectedDate, setSelectedDate] = useState(null);
  const availableTimes = ["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value); // Set the selected date
  };

  return (
    <>
      <div className="container mx-auto w-[95%] mb-[100px] mt-[100px] flex justify-center items-center" id="booking">
        <div className="Form-container flex flex-col lg:flex-row justify-between items-center h-full lg:space-y-0">
          <div className="right-section flex w-full lg:w-[50%] justify-center items-center order-1 lg:order-2 ">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              interval={6000}
              className="h-full"
            >
              <div className="image-container">
                <img className="carousel-image" src={airbalonImage} alt="Hot Air Balloon" />
              </div>
              <div className="image-container">
                <img className="carousel-image" src={secondImage} alt="Second Image" />
              </div>
              <div className="image-container">
                <img className="carousel-image" src={thirdImage} alt="Third Image" />
              </div>
            </Carousel>
          </div>
          <div className="left-section flex flex-col w-full lg:w-[40%]  lg:mt-0 space-y-5 order-2 lg:order-1">
            <div className="w-full">
              <div className="my-3 ">
                <h2 className="font-bold text-4xl py-5 text-[#C6783E]">
                  Experience the Adventure of a Lifetime
                </h2>
                <p className="text-gray-500 text-md">
                  Book your adventure today and take the first step towards an extraordinary experience!
                </p>
              </div>
              <div className="form w-full">
                <form className="grid grid-cols-2 gap-5">
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
                  <div className="flex-col gap-1 flex">
                    <label htmlFor="date">Date</label>
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
                  </div>
                  <div className="col-span-2 flex-col gap-1 flex w-full">
                    <label htmlFor="note">Note</label>
                    <textarea
                      placeholder="Additional Message"
                      className="p-2 border border-gray-400 rounded-md w-full"
                      name="notes"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="col-span-2 p-2 bg-[#C6783E] text-white mx-auto w-[200px]"
                  >
                    Book Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .image-container {
          width: 100%;
          height: 400px; /* Set desired height */
          overflow: hidden; /* Hide overflow */
        }

        .carousel-image {
          width: 100%;
          height: 100%;
          object-fit: cover; /* Cover to maintain aspect ratio */
        }
      `}</style>
    </>
  );
}

export default BookingForm;