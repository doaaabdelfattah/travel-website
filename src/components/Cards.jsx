import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchProducts } from "../redux/reducers/ProductSlice";
import { IoStarSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import "../index.css";

function Cards() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);

  return (
    <div className="CardsContainer w-[90%] mx-auto my-[100px]" id="cards">
      <div className="text-center mb-4 flex justify-start items-start flex-col">
        <h2 className="text-md tracking-wider text-[#C6730E]">CHOOSE YOUR TRIP</h2>
        <h2 className="text-6xl tracking-wider mb-5 text-[#C6783E]">POPULAR TOURS</h2>
      </div>
      <div className="topCards grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] pb-2">
        {products.slice(0, 2).map((product, index) => (
          <div
            key={index}
            className={`card card${index + 1} bg-cover relative bg-center shadow-lg overflow-hidden w-full ${index === 0 ? "md:col-span-2" : ""}`}
            style={{ backgroundImage: `url(${product.image})`, objectFit: "cover" }}
          >
            <div className="overlay"></div>
            <div className="p-4">
              <button className="bg-blue-400 text-white py-2 px-4 absolute right-0 top">BOOK NOW !</button>
              <div className="absolute py-3 bottom-10 text-white">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <IoStarSharp key={i} className={i < product.rating ? "text-yellow-400" : "text-white"} />
                  ))}
                  <h2 className="text-gray-400 text-sm ml-2">Reviews</h2>
                </div>
                <h2 className="text-xl font-semibold tracking-widest text-white">{product.name}</h2>
                <div className="flex flex-row review-section justify-start items-center mb-1 text-white text-md">
                  <IoMdTime />
                  <h2 className="pl-1 pr-2">{product.duration}</h2>
                  <FaRegUser />
                  <h2 className="px-1">{product.people}</h2>
                  <SlLocationPin />
                  <h2 className="px-1">{product.location}</h2>
                </div>
              </div>
              <div className="bg-gray-300 h-[1px] w-[40%] hover-line bottom-10 absolute"></div>
            </div>
          </div>
        ))}
      </div>
      <div className="bottomCards grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 h-[500px]">
        {products.slice(2).map((product, index) => (
          <div
            key={index}
            className={`card card${index + 3} bg-cover bg-center shadow-lg overflow-hidden relative`}
            style={{ backgroundImage: `url(${product.image})`, objectFit: "cover" }}
          >
            <div className="overlay"></div>
            <div className="mt-1">
              <button className="bg-blue-400 text-white py-2 px-4 rotate-90 absolute right-0">250$</button>
              <div className="absolute px-4 py-1 bottom-10 text-white">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <IoStarSharp key={i} className={i < product.rating ? "text-yellow-400" : "text-white"} />
                  ))}
                  <h2 className="text-gray-400 text-sm ml-2">Reviews</h2>
                </div>
                <h2 className="text-xl font-semibold tracking-widest">{product.name}</h2>
                <div className="flex flex-row review-section justify-start items-center mb-1 text-white text-md">
                  <IoMdTime />
                  <h2 className="pl-1 pr-2">{product.duration}</h2>
                  <FaRegUser />
                  <h2 className="px-1">{product.people}</h2>
                  <SlLocationPin />
                  <h2 className="px-1">{product.location}</h2>
                </div>
              </div>
              <div className="bg-gray-300 h-[1px] w-[40%] hover-line bottom-10 absolute"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;