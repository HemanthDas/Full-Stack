import { createContext } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const cart = JSON.parse(Cookies.get("cart") || "[]");

  const addCart = (id) => {
    const updatedCart = [...cart, id];
    Cookies.set("cart", JSON.stringify(updatedCart));
  };

  const removeCart = (id) => {
    const updatedCart = cart.filter((itemId) => itemId !== id);
    Cookies.set("cart", JSON.stringify(updatedCart));
  };

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node,
};

export default CartProvider;
