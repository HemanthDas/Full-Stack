import "./App.css";
import { Router, ReactLocation, Outlet } from "react-location";
import routes from "./router";
function App() {
  const location = new ReactLocation();
  return (
    <>
      <Router location={location} routes={routes}>
        <Outlet />
      </Router>
    </>
  );
}

export default App;
