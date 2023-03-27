import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import backArrow from "../assets/backArrow.png";
import restaurantChefB from "../assets/restaurantChefB.jpg";

const DetailsForm = (props) => {
  const navigate = useNavigate();
  const [partySizeError, setPartySizeError] = useState("");
  const [seatingTypeError, setSeatingTypeError] = useState("");
  const [dateError, setDateError] = useState("");
  const [timeError, setTimeError] = useState("");
  const [occasionError, setOccasionError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      partySize: props.partySize,
      seatingType: props.seatingType,
      date: props.date,
      time: props.time,
      occasion: props.occasion,
    };

    if (validateForm()) {
      props.submitForm(formData);
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (!props.partySize) {
      setPartySizeError("Please select a party size");
      isValid = false;
      setIsValid(false);
    } else {
      setPartySizeError("");
      setIsValid(true);
    }

    if (!props.seatingType) {
      setSeatingTypeError("Please select a seating type");
      isValid = false;
      setIsValid(false);
    } else {
      setSeatingTypeError("");
      setIsValid(true);
    }

    if (!props.date) {
      setDateError("Please select a date");
      isValid = false;
      setIsValid(false);
    } else {
      setDateError("");
      setIsValid(true);
    }

    if (!props.time) {
      setTimeError("Please select a time");
      isValid = false;
      setIsValid(false);
    } else {
      setTimeError("");
      setIsValid(true);
    }

    if (!props.occasion) {
      setOccasionError("Please select an occasion");
      isValid = false;
      setIsValid(false);
    } else {
      setOccasionError("");
      setIsValid(true);
    }

    return isValid;
  };

  return (
    <>
      <div className="container details-header pb-4">
        <div className="container">
          <div className="d-flex justify-content-start pt-3">
            <button
              type="button"
              className="btn btn-outline-primary back-button"
              onClick={() => navigate(-1)}
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
        <form id="details-form" onSubmit={handleSubmit}>
          <fieldset>
            <legend className="d-flex justify-content-center pt-3 pb-3 form-title">
              {" "}
              Details{" "}
            </legend>
            <div className="form-group row mb-3">
              <div className="col mx-3">
                <label htmlFor="select" className="form-label">
                  Party Size
                </label>
              </div>
              <div className="col-4 mx-3">
                <select
                  id="select"
                  className={`form-select ${partySizeError && "is-invalid"}`}
                  onChange={(event) => props.setPartySize(event.target.value)}
                >
                  <option defaultValue>Party Size</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
                {!isValid && <span>{partySizeError}</span>}
              </div>
            </div>
            <div className="form-group row mb-3">
              <div className="col mx-3">
                <label htmlFor="select" className="form-label">
                  Seating Type
                </label>
              </div>
              <div className="col-4 mx-3">
                <select
                  id="select"
                  className={`form-select ${seatingTypeError && "is-invalid"}`}
                  onChange={(event) => props.setSeatingType(event.target.value)}
                >
                  <option defaultValue>Seating Type</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Indoor">Indoor</option>
                </select>
                {!isValid && <span>{seatingTypeError}</span>}
              </div>
            </div>
            <div className="form-group row mb-3">
              <div className="col mx-3">
                <label htmlFor="select" className="form-label date-select">
                  Date
                </label>
              </div>
              <div className="col-4 mx-3">
                <DatePicker
                  selected={props.date}
                  onChange={props.handleDateChange}
                  dateFormat="dd/MM/yyyy"
                  placeholderText="Select a Date"
                  className={`form-select date-select ${dateError && "is-invalid"}`}
                  calendarClassName="custom-calendar"
                />
                {!isValid && <span>{dateError}</span>}
              </div>
            </div>
            <div className="form-group row mb-3">
              <div className="col mx-3">
                <label htmlFor="select" className="form-label">
                  Time
                </label>
              </div>
              <div className="col-4 mx-3">
                <select
                  id="select"
                  className={`form-select ${timeError && "is-invalid"}`}
                  onChange={(event) => props.setTime(event.target.value)}
                >
                  <option defaultValue>Time</option>
                  {Array.isArray(props.availableTimes) &&
                    props.availableTimes.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                </select>
                {!isValid && <span>{timeError}</span>}
              </div>
            </div>
            <div className="form-group row mb-3">
              <div className="col mx-3">
                <label htmlFor="select" className="form-label">
                  Ocassion
                </label>
              </div>
              <div className="col-4 mx-3">
                <select
                  id="select"
                  className={`form-select ${occasionError && "is-invalid"}`}
                  onChange={(event) => props.setOccasion(event.target.value)}
                >
                  <option defaultValue>Occasion</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Business">Business</option>
                </select>
                {!isValid && <span>{occasionError}</span>}
              </div>
            </div>

            <div className="pb-3 pt-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default DetailsForm;
