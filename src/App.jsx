import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { allRoutes } from "./routes/allRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: allRoutes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
