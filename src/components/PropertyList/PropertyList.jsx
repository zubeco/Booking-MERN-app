import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000"
          alt="pListImg"
          className='pListImg'
        />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000"
          alt="pListImg"
          className='pListImg'
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2393 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000"
          alt="pListImg"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>233 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000"
          alt="pListImg"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villa</h1>
          <h2>590 hotels</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000"
          alt="pListImg"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Executives</h1>
          <h2>1300 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
