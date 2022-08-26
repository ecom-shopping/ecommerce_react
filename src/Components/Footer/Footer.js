import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="left_company">
          <h1>LAMA</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            qui totam saepe voluptas odio neque nobis explicabo dolor doloribus
            sunt?
          </p>
        </div>
        <div className="center_links">
          <h3>Useful Links</h3>
          <div className="link">
            <ul>
              <li>Home</li>
              <li>Man Fashion</li>
              <li>Accessories</li>
              <li>Order Tracking</li>
              <li>Wishlist</li>
            </ul>
            <ul>
              <li>Cart</li>
              <li>Woman Fashion</li>
              <li>My Account</li>
              <li>Wishlist</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
        <div className="right_contact">
          <h3>Contact</h3>
          <div className="address">
            <LocationOnIcon />
            <span>47/7 Thiruvalluvar St</span>
          </div>
          <div className="contact">
            <PhoneIcon />
            <span>+91 9080544545</span>
          </div>
          <div className="email">
            <EmailIcon />
            <span>mhkr@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
