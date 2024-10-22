import GeneralInfo from "../components/HomeComponents/GeneralInfo";

import Hero from "../components/common/Header/Hero";
import BookingForm from "../components/BookingForm";
import Reviews from "../components/Reviews";
import Cards from "../components/Cards";


const Home = () => {
  return (
    <>
      <Hero />
      <GeneralInfo />
   
<Cards />
<BookingForm />
<Reviews />

    </>
  );
};

export default Home;
