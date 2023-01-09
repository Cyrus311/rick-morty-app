import { lazy } from "react";
import Loadable from "../components/UI/Loadable";

const Home = Loadable(lazy(() => import("../pages/Home")));

const MainRoutes = {
  path: "",
  element: <Home />
};

export default MainRoutes;
