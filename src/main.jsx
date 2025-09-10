import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

if (process.env.NODE_ENV !== "production") {
  import("@axe-core/react").then(({ default: axe }) => {
    import("react-dom").then((ReactDOM) => {
      axe(React, ReactDOM, 1000);
    });
  });
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
