import React from "react";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000"
          alt="fp-img"
          className="fpImg"
        />
        <span className="fpName">ApartHotel Stare Miastor</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $130</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000"
          alt="fp-img"
          className="fpImg"
        />
        <span className="fpName">ApartHotel Stare Miastor</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $130</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000"
          alt="fp-img"
          className="fpImg"
        />
        <span className="fpName">ApartHotel Stare Miastor</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $130</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
