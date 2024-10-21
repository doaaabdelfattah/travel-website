import NavBar from "./NavBar";
import Header from "./Header";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <>
      <div className="w-full mx-auto relative">
        {/* Hero background image */}
        <div className="h-screen bg-cover bg-center bg-fixed bg-[url(http://localhost:5173/src/assets/images/AirBalloon-5.jpg)]">
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
          <NavBar />
          <div className="flex justify-center items-center z-30">
            <Header />
          </div>
          <div className="flex justify-center items-center mt-[80px] backdrop-blur-sm bg-white/20 w-[70%] mx-auto z-30 relative rounded-3xl lg:h-[150px] lg:rounded-full shadow-lg ">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
