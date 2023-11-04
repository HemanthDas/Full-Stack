import { Link, useRouter } from "@tanstack/react-router";
import { useContext } from "react";
import { AuthContext } from "../context/authcontext";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const route = useRouter();
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="title">
          Shop <span>It</span>
        </Link>
        <div className="search-box">
          <input type="text" placeholder="enter to search" />
        </div>
        <div>
          <Link to={"/cart"} className="cart">
            Cart
          </Link>
        </div>
        <div className="profile">
          {user ? (
            <Link to={"/account"}>
              Profile
              <button
                onClick={() => {
                  logout();
                }}
              >
                Logout
              </button>
            </Link>
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
