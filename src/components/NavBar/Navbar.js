import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img
        className="navbar-logo"
        src="https://leverageedunew.s3.us-east-1.amazonaws.com/assets/img/logo.png"
        alt="company_logo"
      />

      <ul className="navbar-links">
        <li>
          <a href="#">Study Abroad</a>
        </li>
        <li>
          <a href="#">Accommodation</a>
        </li>
        <li>
          <a href="#">Test Prep</a>
        </li>
        <li>
          <a href="#">Finance</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
</div>
  );
};

export default Navbar;
