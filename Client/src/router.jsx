import {
  RootRoute,
  Route,
  Router,
  lazyRouteComponent,
} from "@tanstack/react-router";
import App from "./App";

const rootRoute = new RootRoute({
  component: App,
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazyRouteComponent(() => import("./pages/home")),
});
const accountRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "account",
});

const loginRoute = new Route({
  getParentRoute: () => accountRoute,
  path: "login",
  component: lazyRouteComponent(() => import("./pages/auth/login")),
});
const regitsterRoute = new Route({
  getParentRoute: () => accountRoute,
  path: "register",
  component: lazyRouteComponent(() => import("./pages/auth/register")),
});
const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: lazyRouteComponent(() => import("./pages/NotFound")),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  accountRoute.addChildren([loginRoute, regitsterRoute]),
  notFoundRoute,
]);

export const routes = new Router({ routeTree });
