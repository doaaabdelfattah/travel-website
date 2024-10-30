import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { allRoutes } from "./routes/allRoutes";
import MainLayout from "./layout/MainLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/reducers/AuthSlice"; // Import setUser action

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: allRoutes,
  },
]);

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    // Load user data from localStorage if available
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser))); // Set user data in Redux
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
