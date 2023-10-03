import { useEffect, useState } from "react";
import { emailCheck } from "../assets/formvalidate";
const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  function checkCred() {
    fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 200) {
          console.log(data);
        } else {
          setError(data.message);
        }
      });
  }

  function validate() {
    if (!emailCheck(details.email)) {
      setError("Please Enter a Valid Email");
    } else if (details.password.length == 0) {
      setError("Please Fill Password");
    } else {
      checkCred();
    }
  }
  return (
    <div className="fullbody">
      <div className="auth-box">
        <div className="set">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={details.email}
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
          />
        </div>
        <div className="set">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={details.password}
            onChange={(e) => {
              setDetails({ ...details, password: e.target.value });
            }}
          />
        </div>
        <div className="set">
          <span>{error}</span>
          <button onClick={() => validate()}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
