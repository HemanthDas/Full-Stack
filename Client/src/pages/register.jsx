import { useEffect } from "react";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);
  return (
    <div className="fullbody">
      <div className="auth-box">
        <input type="email" name="email" id="email" />
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <input type="password" name="confirmPassword" id="confirmPassword" />
        <button
          onClick={() => {
            console.log("Register");
          }}
        />
      </div>
    </div>
  );
};

export default Register;
