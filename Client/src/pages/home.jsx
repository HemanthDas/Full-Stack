import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState(""); //useState hook
  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  }, []);
  return <React.Fragment>{data}</React.Fragment>;
};

export default Home;
