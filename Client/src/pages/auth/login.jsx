import { Link, useNavigate, useRouter } from "@tanstack/react-router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authcontext";
const Login = () => {
  const route = useRouter();
  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (user) {
      navigate({ to: "/", replace: true });
    }
  }, [user]);
  async function handleClick() {
    try {
      const resOk = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (resOk.ok) {
        login(data);
        navigate({ to: "/", replace: true });
        alert("Logged in");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert(err);
    }
    setData({ email: "", password: "" });
  }
  return (
    <div className="auth-grid">
      <input
        type="email"
        value={data.email}
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />
      <input
        type="password"
        value={data.password}
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
