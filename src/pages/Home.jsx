import GeneralInfo from "../components/HomeComponents/GeneralInfo";
import PopularTours from "../components/HomeComponents/PopularTours";
import Hero from "../components/common/Header/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <GeneralInfo />
      <PopularTours />
    </>
  );
};

export default Home;
