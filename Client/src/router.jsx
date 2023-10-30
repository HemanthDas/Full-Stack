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

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: lazyRouteComponent(() => import("./pages/NotFound")),
});

const routeTree = rootRoute.addChildren([indexRoute, notFoundRoute]);
export const routes = new Router({ routeTree });
