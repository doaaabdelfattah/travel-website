const GeneralInfo = () => {
  return (
    <div className="flex justify-center flex-wrap lg:flex-nowrap items-center gap-8 lg:w-[80%] mx-auto bg-[#ffff] my-[100px]">
      <div className="flex-col w-6/12 justify-start">
        <span className="uppercase tracking-widest text-hover-color">
          The Best Travel Experience
        </span>
        <h1 className="text-7xl mt-3"> Discover the magic of EGYPT</h1>
        <p className="mt-10 text-2xl font-light line-clamp-4 ">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
          efficitur vulputate lorem magnis quam. Cras leo volutpat neque mus et
          torquent nunc interdum. Fames ac pulvinar rhoncus placerat elementum
          libero vehicula eget. Lectus ridiculus integer fermentum, velit
          malesuada et.
        </p>
        <p className="mt-10 text-2xl font-light line-clamp-4 ">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Hendrerit
          efficitur vulputate lorem magnis quam. Cras leo volutpat neque mus et
          torquent nunc interdum. Fames ac pulvinar rhoncus placerat elementum
          libero vehicula eget. Lectus ridiculus integer fermentum, velit
          malesuada et.
        </p>
      </div>
      <div className="flex w-6/12 relative justify-center">
        <div className="h-[600px] w-[500px] object-cover relative">
          <div className=" back-rectangle"></div>
          <img
            src="http://localhost:5173/src/assets/images/AirBalloon-4.jpg"
            className="h-full w-full object-cover z-30 hover:scale-[.9] duration-300 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
