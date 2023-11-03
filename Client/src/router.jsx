import {
  RootRoute,
  Route,
  Router,
  lazyRouteComponent,
  useNavigate,
} from "@tanstack/react-router";
import App from "./App";
import { AuthContext } from "./context/authcontext";
import { useContext } from "react";
const rootRoute = new RootRoute({
  component: App,
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: lazyRouteComponent(() => import("./pages/home")),
  loader: async () => {
    const resOK = await fetch(`https://fakestoreapi.com/products`);
    if (!resOK.ok) {
      console.log("error");
      throw new Error("Error");
    }
    return resOK.json();
  },
  maxAge: 10_000,
});
const prodcutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "product",
  component: lazyRouteComponent(() => import("./pages/product")),

  loaderContext: ({ search }) => ({ limit: search.limit || 5 }),
  loader: ({ context }) => {
    console.log(context.limit);
    return fetch(`https://fakestoreapi.com/products?limit=${context.limit}`)
      .then((res) => res.json())
      .then((data) => data);
  },
  maxAge: 10_000,
});
const accountRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "account",
  component: lazyRouteComponent(() => import("./pages/account")),
});
const authRoute = new Route({
  getParentRoute: () => rootRoute,
  id: "auth",
  path: "auth",
  beforeLoad: () => {
    const navigate = useNavigate();
    navigate({ to: "/auth/login" });
  },
});
const loginRoute = new Route({
  getParentRoute: () => authRoute,
  path: "login",
  component: lazyRouteComponent(() => import("./pages/auth/login")),
});
const regitsterRoute = new Route({
  getParentRoute: () => authRoute,
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
  prodcutRoute,
  accountRoute,
  authRoute.addChildren([loginRoute, regitsterRoute]),
  notFoundRoute,
]);

export const routes = new Router({ routeTree });
