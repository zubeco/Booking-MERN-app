import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://static.dezeen.com/uploads/2021/09/era-oda-architecture-manhattan-hero.jpg"
          alt="featured-img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Lagos</h1>
          <h2>73 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f0/4a/57/hotel-exterior.jpg?w=900&h=-1&s=1"
          alt="featured-img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Abuja</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://pix10.agoda.net/geo/city/2994/1_2994_02.jpg?ca=6&ce=1&s=1920x822"
          alt="featured-img"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Enugu</h1>
          <h2>40 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
