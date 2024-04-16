import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

const routes = [
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/movie/:id", element: <Movie />, errorElement: <ErrorPage /> },
  { path: "/directors", element: <Directors />, errorElement: <ErrorPage /> },
  { path: "/actors", element: <Actors />, errorElement: <ErrorPage /> },
];

export default routes;
