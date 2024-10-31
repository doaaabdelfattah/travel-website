
import Home from "../pages/Home";
import BookingForm from "../components/BookingForm";
import Reviews from "../components/Reviews";
import Cards from "../components/Cards";
import Login from "../components/Login";
import Register from "../components/Register";
import ConfirmationPage from "../components/ConfirmationPage";
export const allRoutes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "bookingForm",
    element: <BookingForm />,
  },
  {
    path: "confirmation",
    element: <ConfirmationPage />,
  },
  {
    path: "reviews",
    element: <Reviews />,
  }, 
  {
  path: "Cards",
  element: <Cards />,
},
{
  path: "login",
  element: <Login />,
},
{
  path: "register",
  element: <Register />,
},
];
