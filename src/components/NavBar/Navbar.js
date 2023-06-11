"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { CgMenu, CgCloseR } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img
        className="navbar-logo"
        src="https://leverageedunew.s3.us-east-1.amazonaws.com/assets/img/logo.png"
        alt="company_logo"
      />
      <div className={isMenuOpen ? `${active}` : ""}>
        <ul className="navbar-links">
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Study Abroad
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Accommodation
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Test Prep
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Finance
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Community
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Products
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              More
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-icons">
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

      {/*Nav Icons */}
      <div>
        <div className="mobile-navbar-btn">
          {" "}
          <CgMenu
            name="menu-outline"
            className="mobile-nav-icon"
            onClick={() => setIsMenuOpen(true)}
          />{" "}
          <CgCloseR
            name="close-outline"
            className="mobile-nav-icon close-outline"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
