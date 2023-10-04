import { Router, Route, RootRoute } from "@tanstack/react-router";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import Root from "./App";
import ProductPage from "./pages/Product";
import RegisterPage from "./pages/Register";

const rootRoute = new RootRoute({
  component: Root,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
});
const productRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products/$id",
  component: ProductPage,
});

const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  profileRoute,
  productRoute,
  registerRoute,
]);

export const router = new Router({ routeTree });

export default router;
