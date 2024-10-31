import { IoStarSharp } from "react-icons/io5";
import trip1 from "../assets/images/43d22d3d555da8ceba9cf42b5a5ec506.jpg";
import trip3 from "../assets/images/0f.jpg";
import trip2 from "../assets/images/2000x2000-0-70-772d64458b4e11e796b58e2d7ed94c59.jpg";
import trip4 from "../assets/images/egy3a-luxor.jpg";
import trip5 from "../assets/images/caption.jpg";
import "../index.css";
import { FaRegUser } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";

function Cards() {
  return (
    <>
      <div className="CardsContainer w-[90%] mx-auto my-[100px]" id="cards">
        <div className="text-center mb-4 flex justify-start items-start flex-col">
          <h2 className="text-md tracking-wider text-[#C6730E]">
            CHOOSE YOUR TRIP
          </h2>
          <h2 className="text-6xl tracking-wider mb-5 text-[#C6783E]">
            POPULAR TOURS
          </h2>
        </div>
        <div className="topCards grid grid-cols-1 md:grid-cols-3 gap-4 h-[400px] pb-2">
          <div
            className="card card1 bg-cover relative bg-center shadow-lg overflow-hidden w-full md:col-span-2"
            style={{ backgroundImage: `url(${trip4})`, objectFit: "cover" }}
          >
            <div className="overlay"></div>
            <div className="p-4 ">
              <button className="bg-blue-400 text-white py-2 px-4  absolute right-0 top">
                BOOK NOW !
              </button>
              <div className="absolute py-3 bottom-10 text-white">
                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-white" />
                  <h2 className="text-gray-400 text-sm ml-2">Reviews</h2>
                </div>
                <h2 className="text-xl font-semibold tracking-widest text-white">
                  Luxor Tour
                </h2>
                <div className="flex flex-row review-section justify-start items-center mb-1 text-white text-md">
                  <IoMdTime />
                  <h2 className="pl-1 pr-2">10Days</h2>
                  <FaRegUser className="" />
                  <h2 className="px-1">6+</h2>
                  <SlLocationPin />
                  <h2 className="px-1">Luxor</h2>
                </div>
              </div>
              <div className="bg-gray-300 h-[1px] w-[40%] hover-line bottom-10 absolute"></div>
            </div>
          </div>
          <div
            className="card card2 overflow-hidden bg-cover bg-center shadow-lg relative"
            style={{ backgroundImage: `url(${trip1})`, objectFit: "cover" }}
          >
            <div className="overlay"></div>
            <div className="p-4 ">
              <button className="bg-blue-400 text-white py-2 px-4 rotate-90 absolute right-[-40px] top-8">
              BOOK NOW !
              </button>
              <div className="absolute py-3 bottom-10 text-white">
                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <h2 className="text-gray-400 text-sm ml-2">Reviews</h2>
                </div>
                <h2 className="text-xl font-semibold tracking-widest">
                  Luxor Tour
                </h2>
                <div className="flex flex-row review-section justify-start items-center mb-1 text-white text-md">
                  <IoMdTime />
                  <h2 className="pl-1 pr-2">10Days</h2>
                  <FaRegUser className="" />
                  <h2 className="px-1">6+</h2>
                  <SlLocationPin />
                  <h2 className="px-1">Luxor</h2>
                </div>
              </div>
              <div className="bg-gray-300 h-[1px] w-[40%] hover-line bottom-10 absolute"></div>
            </div>
          </div>
        </div>
        <div className="bottomCards grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 h-[500px] ">
          <div
            className="card card1 overflow-hidden bg-cover bg-center shadow-lg relative"
            style={{ backgroundImage: `url(${trip3})`, objectFit: "cover" }}
          >
            <div className="overlay"></div>
            <div className="mt-1">
              <button className="bg-blue-400 text-white py-2 px-4 rotate-90 absolute right-0">
                250$
              </button>
              <div className="absolute px-4 py-1 bottom-10 text-white">
                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-white" />
                  <h2 className="text-gray-400 text-sm ml-2">Reviews</h2>
                </div>
                <h2 className="text-xl font-semibold tracking-widest">
                  Luxor Tour
                </h2>
                <div className="flex flex-row review-section justify-start items-center mb-1 text-white text-md">
                  <IoMdTime />
                  <h2 className="pl-1 pr-2">10Days</h2>
                  <FaRegUser className="" />
                  <h2 className="px-1">6+</h2>
                  <SlLocationPin />
                  <h2 className="px-1">Luxor</h2>
                </div>
              </div>
              <div className="bg-gray-300 h-[1px] w-[40%] hover-line bottom-10 absolute"></div>
            </div>
          </div>
          <div
            className="card card4 bg-cover bg-center shadow-lg overflow-hidden relative"
            style={{ backgroundImage: `url(${trip2})`, objectFit: "cover" }}
          >
            <div className="overlay"></div>
            <div className="mt-1">
              <button className="bg-blue-400 text-white py-2 px-4 rotate-90 absolute right-0">
                250$
              </button>
              <div className="absolute px-4 py-1 bottom-10 text-white">
                <div className="flex items-center">
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-yellow-400" />
                  <IoStarSharp className="text-white" />
                  <h2 className="text-gray-400 text-sm ml-2">Reviews</h2>
                </div>
                <h2 className="text-xl font-semibold tracking-widest">
                  Luxor Tour
                </h2>
                <div className="flex flex-row review-section justify-start items-center mb-1 text-white text-md">
                  <IoMdTime />
                  <h2 className="pl-1 pr-2">10Days</h2>
                  <FaRegUser className="" />
                  <h2 className="px-1">6+</h2>
                  <SlLocationPin />
                  <h2 className="px-1">Luxor</h2>
                </div>
              </div>
              <div className="bg-gray-300 h-[1px] w-[40%] hover-line bottom-10 absolute"></div>
            </div>
          </div>
          <div
            className="card card5 bg-cover bg-center shadow-lg overflow-hidden relative"
            style={{ backgroundImage: `url(${trip5})`, objectFit: "cover" }}
          >
            <div className="overlay"></div>
            <div className="p-4 relative mt-1">
              <button className="bg-blue-400 text-white py-2 px-4 rotate-90 absolute right-0">
                250$
              </button>
            </div>
            <div className="absolute px-4 py-1 bottom-10 text-white">
              <div className="flex flex-row">
                <IoStarSharp className="text-yellow-400" />
                <IoStarSharp className="text-yellow-400" />
                <IoStarSharp className="text-yellow-400" />
                <IoStarSharp className="text-yellow-400" />
                <IoStarSharp className="text-yellow-400" />
                <h2 className="text-gray-200 text-sm ml-2">Reviews</h2>
              </div>
              <h2 className="text-xl font-semibold tracking-widest">
                Luxor Tour
              </h2>
              <div className="flex flex-row review-section justify-start items-center mb-1 text-white text-md">
                <IoMdTime />
                <h2 className="pl-1 pr-2">10Days</h2>
                <FaRegUser className="" />
                <h2 className="px-1">6+</h2>
                <SlLocationPin />
                <h2 className="px-1">Luxor</h2>
              </div>
            </div>
            <div className="bg-gray-300 h-[1px] w-[40%] hover-line bottom-10 absolute"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;