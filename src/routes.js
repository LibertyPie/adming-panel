import Categories from "./pages/Categories";
import Home from "./pages/Home";

export const routes = [
        {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/categories",
        exact: true,
        component: Categories
    }
  ];