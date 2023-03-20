import React, { useState, useReducer, useEffect } from "react";
import backArrow from "../assets/backArrow.png";
import restaurantChefB from "../assets/restaurantChefB.jpg";
import DetailsForm from "./DetailsForm.js";

function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return { ...state, date: action.payload.date };
    default:
      return state;
  }
}

const Details = ({ id }) => {
  const [partySize, setPartySize] = useState(null);
  const [seatingType, setSeatingType] = useState(null);
  const [time, setTime] = useState(null);
  const [occasion, setOccasion] = useState(null);

  //useReducer implementation for date
  const initializeTimes = () => {
    return ["10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
  };
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const [date, setDate] = useState(null);

  // Function to handle state change when the date is updated
  const handleDateChange = (date) => {
    dispatch({ type: "UPDATE_TIMES", payload: { date } });
    setDate(date);
  };

  return (
    <section className="container-fluid" id={id}>
      <div className="container details-header pb-4">
        <div className="container">
          <div className="d-flex justify-content-start pt-3">
            <button
              type="button"
              className="btn btn-outline-primary back-button"
            >
              <img src={backArrow} alt="Back Arrow" className="back-arrow" />
              Back
            </button>
          </div>
          <div className="d-flex flex-row justify-content-center p-0">
            <h1 id="reserve-title">Reserve a Table</h1>
          </div>
        </div>
      </div>
      <div className="container p-0">
        <div className="container img-container p-0">
          <img
            src={restaurantChefB}
            alt="Chef Cooking B"
            className="img-fluid details-img"
          />
        </div>
        <DetailsForm
          setPartySize={setPartySize}
          partySize={partySize}
          setSeatingType={setSeatingType}
          seatingType={seatingType}
          handleDateChange={handleDateChange}
          date={date}
          setTime={setTime}
          time={time}
          availableTimes={availableTimes}
          setOccasion={setOccasion}
          occasion={occasion}
        />
      </div>
    </section>
  );
};

export default Details;
