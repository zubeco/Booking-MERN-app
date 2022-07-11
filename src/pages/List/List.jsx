import { useState } from "react";
import "./List.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import SearchItem from "../../components/SearchItem/SearchItem";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [options, setOptions] = useState(location.state.options);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="listItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listItem">
              <label>Check-in Date</label>
              <span className="listCalender" onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "MM•dd•yy"
              )} - ${format(date[0].endDate, "MM•dd•yy")} `}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="listItem">
              <label>Options</label>
              <div className=" ">
                <div className="listSearchOptionItem">
                  <span className="listOptionText">
                    Min price <small>per night</small>{" "}
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listOptionText">
                    Max price <small>per night</small>{" "}
                  </span>
                  <input type="number" className="listOptionInput" />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listOptionText">Adult</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.adult}
                    min={1}
                  />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listOptionText">Children</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.children}
                    min={0}
                  />
                </div>
                <div className="listSearchOptionItem">
                  <span className="listOptionText">Room</span>
                  <input
                    type="number"
                    className="listOptionInput"
                    placeholder={options.room}
                    min={1}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
