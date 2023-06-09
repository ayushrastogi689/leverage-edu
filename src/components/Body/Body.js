import React from "react";
import "./Body.css";

const Body = () => {
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
      </div>
      <div className="right-column">
        
      </div>
    </div>
  );
};

export default Body;
