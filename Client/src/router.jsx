import Home from "./pages/home";
import Cart from "./pages/cart";
// import Login from "./pages/login";
const Router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/login",
    element: async () => {
      return import("./pages/login").then((module) => {
        const Login = module.default;
        return <Login />;
      });
    },
  },
  {
    path: "/register",
    element: async () => {
      return import("./pages/register").then((module) => {
        const Register = module.default;
        return <Register />;
      });
    },
  },
];
export default Router;
