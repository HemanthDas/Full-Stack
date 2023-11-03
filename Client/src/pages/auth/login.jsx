import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authcontext";
const Login = () => {
  const route = useRouter();
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  function handleClick() {
    alert("Loggin Success");
    console.log(data);
    login(data);
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
