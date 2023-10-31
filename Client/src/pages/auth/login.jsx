import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
const Login = () => {
  const route = useRouter();
  useEffect(() => {
    console.log(route.state.location.search);
  }, []);
  return <div className="">Login</div>;
};

export default Login;
