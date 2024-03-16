import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Movies from "./pages/movies";
import Spiderman from "./pages/spiderman";
import Dashboard from "./pages/dashboard";
import AdminMovies from "./pages/admin-movies";
import AddMovies from "./pages/add-movies";
import PrivRouteUser from "./privRouteUser";
import PrivRouteAdmin from "./privRouteAdmin";

export default createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/sign-in",
    element: <SignIn />,
  },

  {
    path: "/sign-up",
    element: <SignUp />,
  },

  {
    path: "/movies",
    element: (
      <PrivRouteUser>
        <Movies />
      </PrivRouteUser>
    ),
  },

  {
    path: "/spiderman-homecoming",
    element: (
      <PrivRouteUser>
        <Dashboard />
      </PrivRouteUser>
    ),
  },

  {
    path: "/admin/dashboard",
    element: (
      <PrivRouteAdmin>
        <Dashboard />
      </PrivRouteAdmin>
    ),
  },

  {
    path: "/admin/movies",
    element: (
      <PrivRouteAdmin>
        <AdminMovies />
      </PrivRouteAdmin>
    ),
  },

  {
    path: "/admin/movies/add",
    element: (
      <PrivRouteAdmin>
        <AddMovies />
      </PrivRouteAdmin>
    ),
  },
]);
