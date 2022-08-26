import React from "react";
import "./CategoryItem.css";
import { categories } from "../Data";
const CategoryItem = ({}) => {
  return (
    <div className="CategoryContainer">
      {categories.map((item) => {
        const { img, title, id } = item;
        return (
          <div className="CategoryItem" key={id}>
            <img src={img} alt="" />
            <div className="info">
              <h1 className="info_title">{title}</h1>
              <button>SHOP NOW</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItem;
