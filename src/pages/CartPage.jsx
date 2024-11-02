import React, { useState } from 'react';
import image from '../assets/images/egy3a-luxor.jpg';
import { SlLocationPin } from 'react-icons/sl';
import { IoStarSharp } from 'react-icons/io5';

function CardPage() {
  return (
    <>
      <h2 className="mt-[120px] ml-[50px] mb-5 text-2xl text-[#C6783E] text-left">Your Cart (0)</h2>

      {/* Card wrapper */}
      <div className="flex flex-col gap-4 items-center sm:items-start sm:ml-[30px]  ">

        {/* Card component */}
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-full sm:w-[450px] md:w-[450px] lg:w-[400px] mt-2"
          >
            <div className="flex items-start w-full">
              <img src={image} alt="product" className="w-[100px] h-[100px] rounded mr-4" />
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold">Luxor</h3>
                
                <div className="flex items-center gap-1">
                  <SlLocationPin className="text-blue-500 font-bold" />
                  <h2 className="text-md">Naama Bay, Sharm El Sheikh, Egypt</h2>
                </div>

                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-gray-200" />
                  <h2 className="text-gray-400 text-sm ml-2">Reviews</h2>
                </div>

                <p className="text-gray-500 mt-1">120$</p>
              </div>
            </div>

            {/* Remove button at the bottom */}
            <button className="mt-4 w-full sm:w-[100px] px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardPage;
