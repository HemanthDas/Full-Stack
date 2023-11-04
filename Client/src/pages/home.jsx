import Card from "../components/card";
import { useLoader, useMatch } from "@tanstack/react-router";
const Home = () => {
  const data = useLoader();
  const { isFetching } = useMatch();
  console.log("first");
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
