import React from "react";
import "./App.css";
// import Nav from "./Components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import Slider from "./Components/Slider/Slider";
import CategoryItem from "./Components/CategoryItem/CategoryItem";
import Popular from "./Components/PopularProducts/Popular";
import NewsLetter from "./Components/Newsletter/NewsLetter";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Router>
      {/* <Nav /> */}
      <div className="main">
        <Slider />
        <CategoryItem />
        <Popular />
        <NewsLetter />
        <Footer />
        {/* <Routes></Routes> */}
      </div>
    </Router>
  );
}

export default App;
