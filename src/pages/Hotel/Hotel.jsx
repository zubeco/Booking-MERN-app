import React, { useState } from "react";
import "./Hotel.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { FaMapPin } from "react-icons/fa";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { IoMdCloseCircleOutline } from "react-icons/io";
import MailList from "../../components/MailList/MailList";
import Footer from "../../components/Footer/Footer";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://static.dezeen.com/uploads/2021/09/era-oda-architecture-manhattan-hero.jpg",
    },
    {
      src: "https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000",
    },
    {
      src: "https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000",
    },
    {
      src: "https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000",
    },
    {
      src: "https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000",
    },
    {
      src: "https://img.freepik.com/premium-photo/modern-building-office-blue-sky-background_35761-198.jpg?w=2000",
    },
  ];

  const handleOpen = (index) => {
    console.log(index);
    setSlideNumber(index);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <IoMdCloseCircleOutline
              onClick={() => setOpen(!open)}
              className="close"
            />
            <BsArrowLeftCircle
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img
                src={photos[slideNumber].src}
                alt="slideImg"
                className="sliderImg"
              />
            </div>
            <BsArrowRightCircle
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FaMapPin className="hotelMap" />
            <span>Elton St 125 New york</span>
          </div>
          <div className="hotelDistance">
            <span>Excellent location - 500m from center</span>
          </div>
          <div className="hotelPriceHighlight">
            <span>
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImgWrap">
              <div className="hotelImages">
                {photos.map((photo, index) => (
                  <div key={index} className="hotelImgWrapper">
                    <img
                      src={photo.src}
                      alt="hotelWrapperImg"
                      className="hotelImg"
                      onClick={() => handleOpen(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsTexts">
                <h1 className="hotelTitleText">Stay in the heart of Krakow</h1>
                <p className="hotelDesc">
                  Located in Abuja, 6.3 km from Cameroon Embassy, Crest Inn has
                  accommodations with a restaurant, free private parking, an
                  outdoor swimming pool and a fitness center. With a bar, the
                  property also has a shared lounge, as well as a garden. The
                  property provides a 24-hour front desk, a shared kitchen and
                  currency exchange for guests. At the hotel rooms include air
                  conditioning, a seating area, a flat-screen TV with satellite
                  channels, a kitchen, a dining area, a safety deposit box and a
                  private bathroom with a shower and a hairdryer. The rooms are
                  equipped with an electric tea pot, while certain rooms contain
                  a balcony and others also feature garden views. At Crest Inn
                  all rooms come with bed linen and towels.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>Top Location: Highly rated by recent guests (10.0) </span>
                <h2>
                  <b>$945</b><span className="hotelDuartion">(9 nights)</span>
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
