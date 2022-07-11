import React from 'react';
import "./Featured.css";

const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img src="https://static.dezeen.com/uploads/2021/09/era-oda-architecture-manhattan-hero.jpg" alt="featured-img" />
        <div className="featuredTitles">
          <h1>Dublin</h1> 
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://static.dezeen.com/uploads/2021/09/era-oda-architecture-manhattan-hero.jpg" alt="featured-img" />
        <div className="featuredTitles">
          <h1>Dublin</h1> 
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://static.dezeen.com/uploads/2021/09/era-oda-architecture-manhattan-hero.jpg" alt="featured-img" />
        <div className="featuredTitles">
          <h1>Dublin</h1> 
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured