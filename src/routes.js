import Categories from "./pages/Categories";
import Home from "./pages/Home";

// auth guard is to understand if the route is normal or is for connected users only
// guests is used for non connected users, if user is not connected it will be redirected to USE R_REDIRECT defined under config
// users is used for connected users if user is not connected it will be redirected to GUEST_REDIRECT defined under config

export const routes = [
        {
        path: "/",
        exact: true,
        auth: "guests",
        component: Home
    },
    {
        path: "/categories",
        exact: true,
        auth: "users",
        component: Categories
    }
  ];