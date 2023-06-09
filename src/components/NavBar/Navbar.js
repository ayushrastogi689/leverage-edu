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
      <div className="navbar-icons ">
        <img
          className="search"
          src="https://leverageedunew.s3.amazonaws.com/landing-pages/search_icon.png"
          alt="search-icon"
        />
        <img
          className="phone"
          src="https://images.leverageedu.com/landing-pages/phone_icon_b.png"
          alt="phone-icon"
        />
        <img
          className="profile"
          src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fimages.leverageedu.com%2Fassets%2Fimg%2Fmale.png&w=48&q=75"
          alt="profile-icon"
        />
      </div>
</div>
  );
};

export default Navbar;
