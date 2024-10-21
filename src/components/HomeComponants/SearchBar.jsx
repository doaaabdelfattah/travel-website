const SearchBar = () => {
  return (
    <div className="p-[50px] flex flex-wrap gap-8 justify-center lg:justify-between items-center relative z-30">
      <div className="flex relative">
        <select className="py-6 lg:px-48 px-36  appearance-none rounded-full bg-slate-100/60">
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
        <select className="py-6 relative lg:px-48 px-36 appearance-none rounded-full bg-slate-100/60">
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
      <div>
        <button className="bg-hover-color hover:bg-slate-100/60 hover:border-hover-color hover:border-2 hover:text-hover-color py-6 text-white text-xl rounded-full w-[200px]">
          Check availability
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
