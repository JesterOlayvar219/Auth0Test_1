import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { authConfig } from "./auth-config";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider {...authConfig}>
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

reportWebVitals();
