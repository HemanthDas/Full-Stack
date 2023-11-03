import { Link, useRouter } from "@tanstack/react-router";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const route = useRouter();
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="title">
          E-Commerce
        </Link>
        <div className="search-box">
          <input type="text" />
        </div>
        <div className="cart">
          <Link to={"/cart"}>Cart</Link>
        </div>
        <div className="profile">
          {user ? (
            <Link to={"/account"}>Profile</Link>
          ) : (
            <Link
              to={"/auth/login"}
              search={{
                redirect: route.state.location.pathname,
              }}
              activeOptions={{ exact: true }}
            >
              login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
