import React, { useState } from "react";
import Datepicker from "./Datepicker";
import { Link } from "react-router-dom";

const DetailsForm = () => {
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
              onChange={(size) => setPartySize(size)}
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
              onChange={(type) => setSeatingType(type)}
            >
              <option defaultValue>Seating Type</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Indoor">Indoor</option>
            </select>
          </div>
        </div>
        <Datepicker />
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
              onChange={(t) => setTime(t)}
            >
              <option defaultValue>Time</option>
              <option value="17:00">17:00</option>
              <option value="17:30">17:30</option>
              <option value="18:00">18:00</option>
              <option value="18:30">18:30</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
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
              onChange={(oc) => setOccasion(oc)}
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
