import { Link, useLoader } from "@tanstack/react-router";
import { useState } from "react";
const Product = () => {
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
      {data.map((item) => {
        return <div key={item.id}>{item.title}</div>;
      })}
    </div>
  );
};

export default Product;
