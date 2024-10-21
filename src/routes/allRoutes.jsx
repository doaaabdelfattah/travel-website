import Booking from "../pages/Booking";
import Home from "../pages/Home";
import BookingForm from "../components/BookingForm";

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
];
