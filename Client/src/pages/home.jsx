import { useEffect, useState } from "react";
import Card from "../components/card";

const Home = () => {
  const [isFetching, setisFetching] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) {
          console.log(res);
          throw new Error("Error");
        }
        const result = await res.json();
        setData(result);
        setisFetching(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="card-grid">
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        data.map((item) => {
          return <Card key={item.id} {...item} />;
        })
      )}
    </div>
  );
};

export default Home;
