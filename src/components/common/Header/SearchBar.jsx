import BasicDatePicker from "../../../utilities/BasicDatePicker";
import DatePicker from "react-datepicker";
import { useState } from "react";
const SearchBar = () => {
  // const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="p-[50px] flex flex-wrap gap-8 justify-center lg:justify-between items-center relative z-30">
      <div className="flex relative">
        <select className="py-6 lg:px-48 px-36  appearance-none rounded-full bg-slate-100/60 outline-none">
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
      <div className="flex relative">
        {/* <BasicDatePicker /> */}
        {/* <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          className="py-6 px-10 rounded-full bg-slate-100/60 text-black outline-none focus:ring-2 focus:ring-hover-color transition duration-300 ease-in-out cursor-pointer"
          dateFormat="yyyy-MM-dd"
          placeholderText="Select a date"
        /> */}
        <input
          type="date"
          placeholder="Choose Date"
          className="py-6 px-10 rounded-full bg-slate-100/60 text-gray-800 outline-none focus:ring-2 focus:ring-hover-color transition duration-300 ease-in-out cursor-pointer "
        />
      </div>
      <div>
        <button className="bg-hover-color hover:bg-slate-100/60 hover:border-hover-color hover:border-2 hover:text-hover-color py-6 text-white text-xl rounded-full w-[200px]">
          Check availability
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
