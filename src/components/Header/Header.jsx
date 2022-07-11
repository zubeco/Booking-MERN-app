import { useState } from "react";
import { BiBed, BiCar } from "react-icons/bi";
import { HiOutlineCalendar } from "react-icons/hi";
import { CgAirplane } from "react-icons/cg";
import { MdOutlineAttractions } from "react-icons/md";
import { RiTaxiLine } from "react-icons/ri";
import { MdBed } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenoptions] = useState(false);
  const [options, setOptions] = useState({
    Adult: 1,
    Children: 0,
    Room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/hotels", { state: {destination, date, options} });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <div className="headerListItem active">
            <BiBed className="headerListicon" />
            <span className="headListSpan">Stays</span>
          </div>
          <div className="headerListItem">
            <CgAirplane className="headerListicon" />
            <span className="headListSpan">Flights</span>
          </div>
          <div className="headerListItem">
            <BiCar className="headerListicon" />
            <span className="headListSpan">Car rentals</span>
          </div>
          <div className="headerListItem">
            <MdOutlineAttractions className="headerListicon" />
            <span className="headListSpan">Attractions</span>
          </div>
          <div className="headerListItem">
            <RiTaxiLine className="headerListicon" />
            <span className="headListSpan">Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Find your next stay</h1>
            <div className="headerDesc">
              <p>Search deals on hotels, homes, and much more...</p>
            </div>
            {/* <button className="headerBtn">Sign in / Register </button> */}
            <div className="headerSearch">
              <div className="headerSearchItem">
                <MdBed className="searchIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerSearchInput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <HiOutlineCalendar className="searchIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(date[0].startDate, "MM•dd•yy")} - ${format(
                  date[0].endDate,
                  "MM•dd•yy"
                )} `}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="headerSearchItem">
                <FaUser className="searchIcon" />
                <span
                  onClick={() => setOpenoptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.Adult} Adult • ${options.Children} Children • ${options.Room} Room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.Adult <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("Adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.Adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("Adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.Children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("Children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.Children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("Children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.Room <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("Room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.Room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("Room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem headSearch">
                <button className="headerBtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
