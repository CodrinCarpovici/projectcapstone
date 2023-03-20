import React, { useState } from "react";
import Datepicker from "./Datepicker";
import { Link } from "react-router-dom";

const DetailsForm = (props) => {
  const [partySize, setPartySize] = useState(null);
  const [seatingtype, setSeatingType] = useState(null);
  const [time, setTime] = useState(null);
  const [occasion, setOccasion] = useState(null);

  return (
    <form id="details-form">
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
              className="form-select"
              onChange={(input) => setPartySize(input)}
            >
              <option defaultValue>Party Size</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
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
              className="form-select"
              onChange={(input) => setSeatingType(input)}
            >
              <option defaultValue>Seating Type</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Indoor">Indoor</option>
            </select>
          </div>
        </div>
        <Datepicker onDateChange={props.handleDateChange} date={props.date} />
        <div className="form-group row mb-3">
          <div className="col mx-3">
            <label htmlFor="select" className="form-label">
              Time
            </label>
          </div>
          <div className="col-4 mx-3">
            <select
              id="select"
              className="form-select"
              onChange={(input) => setTime(input)}
            >
              <option defaultValue>Time</option>
              {Array.isArray(props.availableTimes)
                ? props.availableTimes.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))
                : console.log(props.availableTimes, "not an array")}
            </select>
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
              className="form-select"
              onChange={(input) => setOccasion(input)}
            >
              <option defaultValue>Occasion</option>
              <option value="Dinner">Dinner</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Business">Business</option>
            </select>
          </div>
        </div>

        <div className="pb-3 pt-3 d-flex justify-content-center">
          <Link
            to="/confirm-reservation"
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </Link>
        </div>
      </fieldset>
    </form>
  );
};

export default DetailsForm;
