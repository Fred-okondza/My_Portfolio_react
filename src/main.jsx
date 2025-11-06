/**
 * MAIN ENTRY POINT
 * 
 * This file bootstraps the React app and renders it into the root element.
 * Compatible with Vite.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import global styles
import "./styles/variables.css";
import "./styles/App.css";

// Create root and render the App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
