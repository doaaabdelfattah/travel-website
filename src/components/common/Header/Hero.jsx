import Header from "./Header";
import SearchBar from "../Header/SearchBar";
import imageBallon from "../../../assets/images/AirBalloon-1.jpg";

const Hero = () => {
  return (
    <>
      <div className="w-full mx-auto relative" id="Hero">
        {/* Hero background image */}
        <div
          className="min-h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${imageBallon})` }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          {/* Main header */}
          <div className="flex justify-center items-center pt-[100px] md:pt-[150px] z-30">
            <Header />
          </div>

          {/* Responsive SearchBar */}
          <div className="px-4 sm:px-8 md:px-12 lg:px-16 z-30">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
