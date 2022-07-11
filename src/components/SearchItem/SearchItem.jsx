import "./SearchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000"
        alt="searchItem"
        className="searchImg"
      />
      <div className="searchDesc">
        <h1 className="searchTitle">Tower Street Apartments</h1>
        <span className="searchDistance">500m from center</span>
        <span className="searchTaxi">Free airport taxi</span>
        <span className="searchSubtitle">Studio Apartment with Air Conditioning</span>
        <span className="searchFeatures">Entire studio • 1 bathroom • 21 m2 1 full bed</span>
        <span className="searchCancelOption">Free cancellation</span>
        <span className="searchCancelSub">You can cancel later, so lock in this great price today!</span>
      </div>
      <div className="searchDetails">
        <div className="searchRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="searchDetailsText">
          <span className="searchPrice">$350</span>
          <span className="searchTax">Includes taxes and fees</span>
          <button className="searchCheckBtn">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
