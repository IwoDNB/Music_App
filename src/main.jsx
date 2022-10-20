import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import Context from "./context/Context.jsx";
import TokenContextProvider from "./context/TokenContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <TokenContextProvider>
      <Context>
        <App />
      </Context>
    </TokenContextProvider>
  </Router>
);
