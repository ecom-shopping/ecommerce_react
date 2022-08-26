import React from "react";
// import "./popularProducts.css";
import "./Popular.css";
import { popularProducts } from "../Data";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Popular = () => {
  return (
    <div className="PopularContainer">
      {popularProducts.map((item) => {
        console.log(item.img);
        const { img, id } = item;
        return (
          <div className="Popular" key={id}>
            <div className="Circle"></div>
            <img src={img} alt="" />
            <div className="info-popular">
              <div className="icon">
                <FavoriteBorderOutlined />
              </div>
              <div className="icon">
                <SearchOutlinedIcon />
              </div>
              <div className="icon">
                <ShoppingCartOutlinedIcon />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Popular;
