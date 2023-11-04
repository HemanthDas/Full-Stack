import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { routes } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <RouterProvider router={routes} />
  </React.Fragment>
);
