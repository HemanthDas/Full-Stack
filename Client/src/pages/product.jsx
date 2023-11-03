import { Link, useLoader, useMatch } from "@tanstack/react-router";
import { useState } from "react";
const Product = () => {
  const { isFetching } = useMatch();
  const data = useLoader();
  const [limit, setLimit] = useState(5);
  return (
    <div>
      <Link
        search={{ limit }}
        onClick={() => {
          setLimit(limit + 5);
        }}
      >
        Product
      </Link>
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        data.map((item) => {
          return <div key={item.id}>{item.title}</div>;
        })
      )}
    </div>
  );
};

export default Product;
