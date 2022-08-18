import React from "react";
import "./App.css";
// import Nav from "./Components/Nav";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <div className="main">
        {/* <Nav /> */}
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
