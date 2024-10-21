import Booking from "../pages/Booking";
import Home from "../pages/Home";
import BookingForm from "../components/BookingForm";
import Reviews from "../components/Reviews";
import Cards from "../components/Cards";

export const allRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "bookingForm",
    element: <BookingForm />,
  },
  {
    path: "reviews",
    element: <Reviews />,
  }, 
  {
  path: "Cards",
  element: <Cards />,
},
];
