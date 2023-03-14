import React from "react";
import backArrow from "../assets/backArrow.png";
import Datepicker from "./Datepicker";

const Details = ({ id }) => {
  return (
    <section className="container-fluid p-3" id={id}>
      <div className="container">
        <button
          type="button"
          className="btn btn-primary justify-content-start back-button"
        >
          <img src={backArrow} alt="back-arrow" />
          Back
        </button>
        <div className="d-flex flex-row justify-content-center p-0">
          <h1>Reserve a Table</h1>

          <div></div>
        </div>
        <img src="" alt="" />
        <form>
          <fieldset>
            <legend> Details </legend>
            <div className="form-group row mb-3">
              <div className="col">
                <label htmlFor="select" className="form-label">
                  Party Size
                </label>
              </div>
              <div className="col-4">
                <select id="select" className="form-select">
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
              <div className="col">
                <label htmlFor="select" className="form-label">
                  Seating Type
                </label>
              </div>
              <div className="col-4">
                <select id="select" className="form-select">
                  <option defaultValue>Seating Type</option>
                  <option value="Outdoor">Outdoor</option>
                  <option value="Indoor">Indoor</option>
                </select>
              </div>
            </div>
            <Datepicker />
            <div className="form-group row mb-3">
              <div className="col">
                <label htmlFor="select" className="form-label">
                  Time
                </label>
              </div>
              <div className="col-4">
                <select id="select" className="form-select">
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
              <div className="col">
                <label htmlFor="select" className="form-label">
                  Ocassion
                </label>
              </div>
              <div className="col-4">
                <select id="select" className="form-select">
                  <option defaultValue>Occasion</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Engagement">Engagement</option>
                  <option value="Anniversary">Anniversary</option>
                  <option value="Business">Business</option>
                </select>
              </div>
            </div>

            <div className="mb-3"></div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Details;
