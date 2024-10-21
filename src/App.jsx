import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { allRoutes } from "./routes/allRoutes";
import MainLayout from "./layout/MainLayout";
import BookingForm from "./components/BookingForm";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: allRoutes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
  

}

export default App;
