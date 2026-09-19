import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MainLayout from "../layouts/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
       children: [
      { index: true, Component: Home },
      { path: "/movies", Component: Movies, },
    ],
    errorElement: <h1>Page not found!</h1>,
  },
  
]);