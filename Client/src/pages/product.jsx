import { useNavigate, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const Product = () => {
  const router = useRouter();
  const { id } = router.state.location.search;
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const [isFetching, setisFetching] = useState(true);
  useEffect(() => {
    console.log(id);
    if (id === undefined) navigate({ to: "/404" });
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) {
          console.log(res);
          throw new Error("Error");
        }
        const result = await res.json();

        setProduct(result);
        setisFetching(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return <div>{isFetching ? <>loading...</> : <h1>{product.title}</h1>}</div>;
};

export default Product;
