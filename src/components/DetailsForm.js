import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const DetailsForm = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      partySize: props.partySize,
      seatingType: props.seatingType,
      date: props.date,
      time: props.time,
      occasion: props.occasion,
    };
    props.submitForm(formData);
  };

  return (
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
              className="form-select"
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
              onChange={(event) => props.setSeatingType(event.target.value)}
            >
              <option defaultValue>Seating Type</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Indoor">Indoor</option>
            </select>
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
              className="form-select date-select"
              calendarClassName="custom-calendar"
            />
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
              className="form-select"
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
              onChange={(event) => props.setOccasion(event.target.value)}
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default DetailsForm;
