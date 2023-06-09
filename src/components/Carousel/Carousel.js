"use client";

import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = ({ imageUrls }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imageUrls.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + imageUrls.length) % imageUrls.length
    );
  };

  return (
    <div className="carousel">
      <button className="prev-button" onClick={prevSlide}>
        {"<"}
      </button>
      <img
        className="slide-image"
        src={imageUrls[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
      <button className="next-button" onClick={nextSlide}>
        {">"}
      </button>
    </div>
  );
};

export default Carousel;
