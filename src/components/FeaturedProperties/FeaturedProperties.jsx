import React from "react";
import "./FeaturedProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://www.travelplusstyle.com/wp-content/uploads/2016/01/sonevajani-1880.jpg"
          alt="fp-img"
          className="fpImg"
        />
        <span className="fpName">Zubby Resorts</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Starting from $130</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="http://www.caandesign.com/wp-content/uploads/2015/07/Luxury-Small-Apartment-in-Taipei-studio-oj-03.jpg"
          alt="fp-img"
          className="fpImg"
        />
        <span className="fpName">Waterpoint Apartments</span>
        <span className="fpCity">London</span>
        <span className="fpPrice">Starting from $130</span>
        <div className="fpRating">
          <button>9.5</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://api.opulencevacations.com/properties/eb229ef0-2bc0-11e8-a1f0-735d7ece551d/Exterior_high_2485928.jpg"
          alt="fp-img"
          className="fpImg"
        />
        <span className="fpName">ApartHotel Stare Miastor</span>
        <span className="fpCity">Eziobodo</span>
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
