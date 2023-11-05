import { Link, useRouter, useNavigate } from "@tanstack/react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authcontext";
const Register = () => {
  const navigate = useNavigate();
  const route = useRouter();
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({
    email: "",
    password: "",
    rePassword: "",
  });
  async function handleClick() {
    if (data.password !== data.rePassword) {
      alert("Passwords do not match");
      return;
    }
    const resOk = await fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });
    login({ email: data.email, password: data.password });
    if (resOk.ok) {
      alert("Registered");

      navigate({
        to: route.state.location.search.redirect || "/",
        replace: true,
      });
    }
  }
  return (
    <div className="auth-grep">
      <input
        type="email"
        placeholder="ENTER YOUR MAIL"
        onChange={(e) => {
          setData({ ...data, email: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="ENTER YOUR PASSWORD"
        onChange={(e) => {
          setData({ ...data, password: e.target.value });
        }}
      />
      <input
        type="password"
        placeholder="RE-ENTER YOUR PASSWORD"
        onChange={(e) => {
          setData({ ...data, rePassword: e.target.value });
        }}
      />
      <button onClick={handleClick}>Register</button>
      <Link to={"/auth/login"} search={route.state.location.search}>
        login
      </Link>
    </div>
  );
};

export default Register;
