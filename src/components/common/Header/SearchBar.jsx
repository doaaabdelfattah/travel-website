import BasicDatePicker from "../../../utilities/BasicDatePicker";
import DatePicker from "react-datepicker";
import { useState } from "react";

const SearchBar = () => {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="flex justify-center items-start mt-5 ">
      <div className="p-5 flex flex-row gap-2 justify-center items-center relative z-30 bg-white/20 backdrop-blur-sm w-[60%] lg:rounded-full rounded-lg lg:h-[110px] h-fit mb-5 ">
        <div className="flex items-center flex-col lg:flex-row lg:gap-5 justify-evenly gap-2 w-full">
          {/* left select ============= */}
          <div className="flex relative lg:w-4/12 w-full ">
            <select className="py-3 px-5 w-full appearance-none rounded-full bg-slate-100/60 outline-none">
              <option>All Services</option>
              <option>Air Balloons</option>
              <option>Tour</option>
            </select>
            {/* Custom Arrow */}
            <div className="pointer-events-none absolute top-1/2 right-5 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-black"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
          {/* Middle Select ========== */}
          <div className="flex relative lg:w-4/12 w-full">
            <input
              type="date"
              placeholder="Choose Date"
              className="py-3 w-full px-5 rounded-full bg-slate-100/60 text-gray-800 outline-none focus:ring-2 focus:ring-hover-color transition duration-300 ease-in-out cursor-pointer "
            />
          </div>
          {/* Button */}
          <div className="lg:w-4/12 w-full">
            <button className="py-3 w-full px-5 bg-hover-color hover:bg-slate-100/60 hover:border-hover-color hover:border-2 hover:text-hover-color text-white text-xl rounded-full">
              Check availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;