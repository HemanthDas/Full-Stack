import { Link, useNavigate, useRouter } from "@tanstack/react-router";
const Login = () => {
  const route = useRouter();
  const navigate = useNavigate();
  function handleClick() {
    alert("Loggin Success");
    navigate({ to: route.state.location.search.redirect, replace: true });
  }
  return (
    <div className="auth-grid">
      <input type="text" />
      <input type="text" />
      <button onClick={handleClick}>Login</button>
      <Link to={"/auth/register"} search={route.state.location.search}>
        register
      </Link>
    </div>
  );
};

export default Login;
