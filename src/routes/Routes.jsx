import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../layouts/PublicLayout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Rooms from "../components/Rooms/Rooms";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/rooms",
        element:<Rooms/>
      },
      {
        path:"/login",
        element:<Login/>

      },

      {
        path:"/register",
        element:<Register/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;