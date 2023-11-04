import "./App.css";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Navbar from "./components/navbar";
import AuthProvider from "./context/authcontext";
import CartProvider from "./context/cartcontext";
function App() {
  return (
    <>
      <AuthProvider>
        <CartProvider>
        <Navbar/>
        <Outlet/>
        </CartProvider>
      </AuthProvider>
      <TanStackRouterDevtools />
    </>
  );
}

export default App;
