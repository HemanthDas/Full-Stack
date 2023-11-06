import PropTypes from "prop-types";
import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { CartContext } from "../context/cartcontext";
const Card = (props) => {
  const { addCart } = useContext(CartContext);
  function handleAdd() {
    addCart(props.id);
  }
  return (
    <Link to={`/product`} search={{ id: props.id  }}>
      <div className="card-grid">
        <div className="card">
          <div className="card-image">
            <img src={props.image} alt={props.title} />
          </div>

          <div className="card-body">
            <h2>{props.title}</h2>
            <p>{props.price}</p>
            <button onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  rating: PropTypes.object,
};

export default Card;
