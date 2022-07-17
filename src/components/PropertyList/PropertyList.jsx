import React from "react";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2019/02/178793622.jpg?resize=1024%2C683"
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
          src="http://www.caandesign.com/wp-content/uploads/2015/07/Luxury-Small-Apartment-in-Taipei-studio-oj-01.jpg"
          alt="pListImg"
          className='pListImg'
        />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2393 Apartments</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://images.ctfassets.net/gxwgulxyxxy1/2mAxXcPfyn0vZ0Jhbgc8d3/37ae243da39f56f877673c9db48844fa/57755155-3154-4e02-a5b6-22fa0814bdad.lg1.jpg"
          alt="pListImg"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>233 Cabins</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://do84cgvgcm805.cloudfront.net/article/362/1200/25cf654358d7812a07902fa42f249dedbec8eb058bdda541c88b9e3b317a93d9.jpg"
          alt="pListImg"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Villa</h1>
          <h2>590 Villas</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://www.vision-destinations.com/uploads/8/3/3/9/83391040/edited/34453-940x-sfr-water-villas-1bedroom-2.jpg"
          alt="pListImg"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Resort</h1>
          <h2>1300 Resorts</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
