import React, { useState, useReducer, useEffect } from "react";
import backArrow from "../assets/backArrow.png";
import restaurantChefB from "../assets/restaurantChefB.jpg";
import DetailsForm from "./DetailsForm.js";
import { fetchAPI, submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

export function updateTimes(state, action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload.times;
    default:
      return state;
  }
}

export const initializeTimes = async () => {
  const today = new Date();
  return await fetchAPI(today);
};

const Details = ({ id }) => {
  const [partySize, setPartySize] = useState(null);
  const [seatingType, setSeatingType] = useState(null);
  const [time, setTime] = useState(null);
  const [occasion, setOccasion] = useState(null);

  const navigate = useNavigate();

  //useReducer implementation for date

  const [availableTimes, dispatch] = useReducer(updateTimes, []);

  const [date, setDate] = useState(new Date());

  const handleDateChange = async (date) => {
    setDate(date);
    const times = await fetchAPI(date);
    dispatch({ type: "UPDATE_TIMES", payload: { times } });
  };

  useEffect(() => {
    async function initialize() {
      const times = await initializeTimes();
      dispatch({ type: "UPDATE_TIMES", payload: { times } });
    }
    initialize();
  }, []);

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      navigate("/booking-confirmed");
    }
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
          submitForm={submitForm}
        />
      </div>
    </section>
  );
};

export default Details;
