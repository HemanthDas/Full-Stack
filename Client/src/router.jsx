import {
  RootRoute,
  Route,
  Router,
  lazyRouteComponent,
} from "@tanstack/react-router";
import App from "./App";
function createRoutes() {
  const rootRoute = new RootRoute({
    component: App,
  });

  const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/",
    component: lazyRouteComponent(() => import("./pages/home")),
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
    maxAge: 100_000,
  });

  const accountRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "account",
    component: lazyRouteComponent(() => import("./pages/account")),
  });

  const authRoute = new Route({
    getParentRoute: () => rootRoute,
    id: "auth",
  });

  const loginRoute = new Route({
    getParentRoute: () => authRoute,
    path: "auth/login",
    component: lazyRouteComponent(() => import("./pages/auth/login")),
  });

  const regitsterRoute = new Route({
    getParentRoute: () => authRoute,
    path: "auth/register",
    component: lazyRouteComponent(() => import("./pages/auth/register")),
  });
  const cartRoute = new Route({
    getParentRoute: () => rootRoute,
    path: "/cart",

    component: lazyRouteComponent(() => import("./pages/cartpage")),
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
    cartRoute,
    notFoundRoute,
  ]);

  return new Router({ routeTree });
}

export const routes = createRoutes();
