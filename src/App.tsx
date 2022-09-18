import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatedRoutes } from "./components/AnimatedRoutes";

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;