import GeneralInfo from "../components/HomeComponents/GeneralInfo";

import Hero from "../components/common/Header/Hero";
import BookingForm from "../components/BookingForm";
import Reviews from "../components/Reviews";
import Cards from "../components/Cards";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="general-home" className="h-[100px]"></div>
      <GeneralInfo />
      <div id="cards-home" className="h-[170px]"></div>
      <Cards />
      <div id="booking-home" className="h-[100px]"></div>
      <BookingForm />
      <Reviews />
    </>
  );
};

export default Home;
