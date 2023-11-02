import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
import { useNavigate } from "@tanstack/react-router";
const Account = () => {
  const isLogin = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) {
      navigate({ to: "account/login" });
    }
  }, []);
  return <div>Account</div>;
};
export default Account;
