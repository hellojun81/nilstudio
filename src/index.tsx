import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom"; // ✅ HashRouter로 변경
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <Router>
    <App />
  </Router>
);
