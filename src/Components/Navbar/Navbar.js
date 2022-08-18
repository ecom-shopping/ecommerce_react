import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Navbar.css";
const Navbar = () => {
  return (
    <header className="Container">
      <div className="nav">
        <div className="left">
          <div className="language">EN</div>
          <input type="text" />
          <SearchIcon />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
