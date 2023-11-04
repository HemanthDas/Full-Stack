import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card-grid">
      
      <div className="card">
        <div className="card-image">
          <img src={props.image} alt={props.title} />
        </div>

        <div className="card-body">
          <h2>{props.title}</h2>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
      </div>

      

    </div>
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
