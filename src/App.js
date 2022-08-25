import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
}

export default App;
