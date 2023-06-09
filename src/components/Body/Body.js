import React from "react";
import "./Body.css";
import Carousel from "../Carousel/Carousel";

const Body = () => {
  const imageUrls = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEg3PGPsTqpk9MJkYziqwjA8S-leiQqgoLlZwpcyMKlEI3P84P5gQGDo4Qsn17V7dZP0I&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3pbtiwVxGM2cnTeQ3lGvbOK3T-keMoTHqgJfgdfv1fz40PEJ5rVdWzKXm-o-voLdmlo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTwTzE6T4FLivXc_dveIjT5mg_XV-N-3Vxypb1-lbya44ZSlsoq9bv6Ww7CFoNH-tsZTY&usqp=CAU",
  ];
  return (
    <div className="body-container">
      <div className="left-column">
        <h2>First in the Family</h2>
        <p>
          They are the global citizens of tomorrow. Start your abroad journey
          today.
        </p>
        <div className="live-section">
          <span> Live on </span>
          <img
            className="disney_hotstar"
            src="https://i.imgur.com/U4Op2KW.jpeg"
            alt="Disney+Hotstar"
          />
        </div>
        <div className="buttons">
          <button className="primary-button">
            Get Your Shortlist for Free
          </button>
        </div>
        <div className="buttons">
          <button className="secondary-button">Talk to an expert</button>
        </div>
        <div className="description">
          <p>95% of our students get an admit in less than 4 weeks</p>
          <p>Our students finished university to work at global offices of:</p>
        </div>
        <img
          src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fleverageeduhome.gumlet.io%2FFrame3430.png&w=640&q=75"
          alt="companies"
          className="companies-image"
        />
      </div>
      <div className="right-column">
        <div className="carousel">
          <Carousel imageUrls={imageUrls} />
        </div>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-logo"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png"
            alt="WhatsApp"
          />
        </a>
      </div>
    </div>
  );
};

export default Body;
