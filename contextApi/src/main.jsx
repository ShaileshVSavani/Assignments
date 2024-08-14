import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BioProvider from "./contextProvider/Context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <BioProvider>
        <App />
      </BioProvider>
    </BrowserRouter>
  </React.StrictMode>
);
