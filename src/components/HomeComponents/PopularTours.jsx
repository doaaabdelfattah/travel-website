import ToursList from "./ToursList";

const PopularTours = () => {
  return (
    <div className="mt-[40px] w-[80%] mx-auto">
      <span className="uppercase tracking-widest text-hover-color">
        The Best Travel Experience
      </span>
      <h1 className="text-7xl mt-3 uppercase"> Popular tours</h1>
      <div className="mt-5">
        <ToursList />
      </div>
    </div>
  );
};

export default PopularTours;
