import { Link, useRouter, useNavigate } from "@tanstack/react-router";

const Register = () => {
  const navigate = useNavigate();
  const route = useRouter();
  function handleClick() {
    alert("regoster Success");
    navigate({ to: route.state.location.search.redirect, replace: true });
  }
  return (
    <div className="auth-grep">
      <input type="text" />
      <input type="text" />
      <button onClick={handleClick}>Login</button>
      <Link to={"/auth/login"} search={route.state.location.search}>
        login
      </Link>
    </div>
  );
};

export default Register;
