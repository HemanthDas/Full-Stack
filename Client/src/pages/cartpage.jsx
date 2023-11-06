import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartcontext";
import { AuthContext } from "../context/authcontext";
import Card from "../components/card";
const Cart = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isFetching, setisFetching] = useState(true);
  useEffect(() => {
    if (user) {
      fetch(`https://fakestoreapi.com/products `)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }

          return res.json();
        })
        .then((data) => {
          setItems(data);
          setisFetching(false);
        })
        .catch((error) => setError(error.message));
    } else {
      setError("Please Login");
    }
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  const cartItems = items.filter((item) => cart.includes(item.id));

  return (
    <div>
      {user ? (
        cart.length === 0 ? (
          <div>Data Not Found</div>
        ) : isFetching ? (
          <div>loading...</div>
        ) : (
          <div className="card-grid">
            {cartItems.map((cartItem) => (
              <Card key={cartItem.id} {...cartItem} />
            ))}
          </div>
        )
      ) : (
        <div>Please Login</div>
      )}
    </div>
  );
};

export default Cart;
