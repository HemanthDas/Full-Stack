import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authcontext";
const Login = () => {
  const route = useRouter();
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);
  useEffect(() => {
    if (user) {
      navigate({
        to: route.state.location.search.redirect || "/",
        replace: true,
      });
    }
  });
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  function handleClick() {
    login(data);
    alert("Loggin Success");
    navigate({ to: route.state.location.search.redirect, replace: true });
  }
  return (
    <div className="auth-grid">
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />
      <button onClick={handleClick}>Login</button>
      <Link to={"/auth/register"} search={route.state.location.search}>
        register
      </Link>
    </div>
  );
};

export default Login;
