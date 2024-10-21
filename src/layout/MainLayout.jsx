import NavBar from "../components/common/Header/NavBar";
import Footer from "../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  console.log("mainlayout render");
  return (
    <>
      <div className="flex flex-col justify-between z-[99] min-h-screen">
        <NavBar />
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
