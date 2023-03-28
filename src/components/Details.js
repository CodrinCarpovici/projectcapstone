import React, { useState, useReducer, useEffect } from "react";

import DetailsForm from "./DetailsForm.js";
import { fetchAPI, submitAPI } from "../api";
import Confirmation from "./Confirmation.js";
import Reserve from "./Reserve.js";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";

//Local Storage
import {useLocalStorage} from "../hooks/useLocalStorage";

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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  const navigate = useNavigate();

  //Form 1 Booking Details
  const [partySize, setPartySize] = useLocalStorage("partySize", "");
  const [seatingType, setSeatingType] = useLocalStorage("seatingType", "");
  const [time, setTime] = useLocalStorage("time", "");
  const [occasion, setOccasion] = useLocalStorage("occasion", "");

  //Form 2 Personal Details
  const [fullName, setFullName] = useLocalStorage("fullName", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [phoneNumber, setPhoneNumber] = useLocalStorage("phoneNumber", "");

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

  const detailsFormIsSubmitted = () => {
    setIsReserved(true);
    console.log(isReserved);
    navigate("confirmation");
  };

  const submitForm = async (formData) => {
    const success = await submitAPI(formData);
    if (success) {
      console.log(success);
      console.log(isSubmitted);
      setIsSubmitted(true);
      navigate("reserve");
    }
  };

  return (
    <section className="container-fluid" id={id}>
      <Routes>
        <Route
          path=""
          element={
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
              detailsFormIsSubmitted={detailsFormIsSubmitted}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="reserve"
          element={
            <Reserve
              id="reserve-page"
              detailsFormIsSubmitted={detailsFormIsSubmitted}
              partySize={partySize}
              seatingType={seatingType}
              date={date}
              time={time}
              occasion={occasion}
              fullName={fullName}
              email={email}
              phoneNumber={phoneNumber}
              setFullName={setFullName}
              setEmail={setEmail}
              setPhoneNumber={setPhoneNumber}
            />
          }
        />
        <Route
          path="confirmation"
          element={
            <Confirmation
              id="confirmation-page"
              partySize={partySize}
              seatingType={seatingType}
              date={date}
              time={time}
              occasion={occasion}
              fullName={fullName}
              email={email}
              phoneNumber={phoneNumber}
            />
          }
        />
      </Routes>
      <Outlet />
    </section>
  );
};

export default Details;
