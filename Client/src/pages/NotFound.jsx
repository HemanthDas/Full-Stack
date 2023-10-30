import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <div className="notfoundimg">
        <p>Page Not Found</p>
        <Link to="/" className="links">Back to homepage</Link>
      </div>
    </div>
  );
};

export default NotFound;
