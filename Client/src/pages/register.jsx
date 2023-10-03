import { useEffect, useState } from "react";
import { emailCheck, passwordCheck } from "../assets/formvalidate";
const Register = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const CreatUser = () => {
    let res = fetch("http://localhost:3000/auth/register", {
      method: "Post",
      headers: {
        "Content-Type": "application/json, charset=utf-8",
      },
      body: JSON.stringify(user),
    });
    let responseOk = res && res.ok;
    if (responseOk) {
      setError("User Created");
    }
  };
  const validate = () => {
    if (!emailCheck(user.email) || user.email.length == 0) {
      console.log("first");
      setError("Please Enter a Valid Email");
    } else if (user.password.length < 8) {
      setError("Password must be at least 8 characters");
    } else if (user.password !== user.confirmPassword) {
      setError("Passwords do not match Re Enter Password");
    } else if (passwordCheck(user.password)) {
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter and one number"
      );
    } else {
      setError("");
      CreatUser();
      setUser({ email: "", password: "", confirmPassword: "" });
    }
  };
  return (
    <div className="fullbody">
      <div className="auth-box">
        <div className="set">
          <label>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>

        <div className="set">
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={(e) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <div className="set">
          <label>Re-Enter Password</label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) => {
              setUser({ ...user, confirmPassword: e.target.value });
            }}
          />
        </div>
        <div className="set">
          <span>{error}</span>
          <button onClick={() => validate()}>Register</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
