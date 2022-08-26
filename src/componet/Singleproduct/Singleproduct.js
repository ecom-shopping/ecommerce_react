import React from "react";
import "./Singleproduct.css";
function Singleproduct() {
  return (
    <section>
      <div className="singleProduct">
        <div className="productImg">
          <img
            src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png    "
            alt=""
          />
        </div>
        <div className="productcon">
          <h1>Denim Jumpsuit</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
            animi a ea quos illo pariatur maiores cum laboriosam eveniet
            suscipit, nemo, nobis totam facilis, voluptate quam qui porro
            mollitia alias.
          </p>
          <span>$20</span>
          <div className="filterContainer">
            <h3>Color</h3>
            <div className="filterColor" style={{ background: "red" }}></div>
            <div className="filterColor" style={{ background: "blue" }}></div>
            <div className="filterColor" style={{ background: "black" }}></div>
            <div className="selectSize">
              <span>size:</span>
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
                <option>XXL</option>
              </select>
            </div>
          </div>
          <div className="AddContainer">
            <div className="AmountContainer">
              <i class="fa-solid fa-plus"></i>
              <span>1</span>
              <i class="fa-solid fa-minus"></i>
            </div>
            <div className="Addbutton">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Singleproduct;
