import { Link, useRouter } from "@tanstack/react-router";

const Navbar = () => {
  const isLoggedIn = false;
  const route = useRouter();
  return (
    <div>
      {route.state.location.pathname !== "/login" &&
        route.state.location.pathname !== "/register" && (
          <nav className="navbar">
            <Link to="/">E-Commerce</Link>
            <div className="profile">
              {isLoggedIn ? (
                <Link to={"account"}>Profile</Link>
              ) : (
                <Link
                  to={"account/login"}
                  search={{
                    redirect:route.state.location.pathname,
                  }}
                >
                  login
                </Link>
              )}
            </div>
          </nav>
        )}
    </div>
  );
};

export default Navbar;
