import Header from "./Header";
import SearchBar from "../Header/SearchBar";
import imageBallon from "../../../assets/images/AirBalloon-1.jpg";

const Hero = () => {
  return (
    <>
      <div className="w-full mx-auto relative">
        {/* Hero background image */}
        <div className="min-h-screen bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${imageBallon})` }}>
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          {/* Main header */}
          <div className="flex justify-center items-center pt-[150px] z-30">
            <Header />
          </div>

          <SearchBar />
        </div>
      </div>
    </>
  );
};

export default Hero;