import React from "react";
import { NavLink, Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header__section">
          <p>Super Deal! Free Shipping on Orders over 🔥</p>
        </div>
      </header>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__left">
            <div className="nav__lang">
              <p>EN</p>
            </div>
            <div className="nav__search">
              <input type="text" placeholder="Search" />
              <SearchIcon className="search__icon" />
            </div>
          </div>
          <div className="nav__center">
            <h1>
              <Link to="/">NeW Trends</Link>
            </h1>
          </div>
          <div className="nav__right">
            <div className="login__btn">
              <NavLink to="/login">Login</NavLink>
            </div>

            <div className="signup__btn">
              <NavLink to="/register">SignIn</NavLink>
            </div>

            <div className="cart__icon">
              <NavLink to="/">
                <Badge badgeContent={4} color="primary">
                  <ShoppingCartOutlinedIcon className="cart__icon" />
                </Badge>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
