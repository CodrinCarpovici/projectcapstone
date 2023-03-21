import React from "react";
import backArrow from "../assets/backArrow.png";
import calendarIcon from "../assets/calendarIcon.svg";
import clockIcon from "../assets/clockIcon.svg";
import customerIcon from "../assets/customerIcon.svg";
import dishIcon from "../assets/dishIcon.svg";
import tableIcon from "../assets/tableIcon.svg";
import restaurant from "../assets/restaurant.jpg";
import { Outlet, useNavigate } from "react-router-dom";

const Reserve = (props) => {
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    props.detailsFormIsSubmitted();
    // Update state with form inputs
    props.setFullName(e.target.fullName.value);
    props.setEmail(e.target.email.value);
    props.setPhoneNumber(e.target.phoneNumber.value);
  };

  const [month, day] = props.date.toLocaleString().split('/');
  const year = props.date.toLocaleString().year;

  return (
    <section className="container-fluid" id={props.id}>
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
          <div className="p-0">
            <h1 id="reserve-title">Reserve a Table</h1>
          </div>
        </div>
      </div>
      <div className="container header">
        <div className="container img-container">
          <img
            src={restaurant}
            alt="restaurant photo"
            className="img-fluid header-img"
          />
        </div>
        <div className="container  details-text p-4">
          <h2 className="text-center">Little Lemon</h2>
          {/*Replace with inputs */}
          <p>
            <img src={calendarIcon} alt="calendar icon" className="pe-3" />
            {props.date.toLocaleDateString()}
          </p>
          <p>
            <img src={customerIcon} alt="customer icon" className="pe-3" />
            Table for {props.partySize} people
          </p>
          <p>
            <img src={clockIcon} alt="clock icon" className="pe-3" />
            {props.time}
          </p>
          <p>
            <img src={tableIcon} alt="table icon" className="pe-3" />
            {props.seatingType}
          </p>
          <p className="mb-3">
            <img src={dishIcon} alt="dish icon" className="pe-3" />
            {props.occasion}
          </p>
        </div>
      </div>
      <div className="container p-4 form">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="inputName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
              name="fullName"
              placeholder="Full Name..."
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail1" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail1"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email Address..."
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhoneNumber" className="form-label">
              Phone Number(Optional)
            </label>
            <input
              type="tel"
              className="form-control"
              id="inputPhoneNumber"
              name="phoneNumber"
              placeholder="Phone Number..."
            />
          </div>
          <div className="container p-0">
            <h2 className="important-info">Important Information</h2>
            <p className="info-text">
              We allow up to 15 minutes over your booking time before the slot
              is cancelled. Please call if you have any delays to avoid
              cancellation.
            </p>
          </div>
          <div className="pb-3 pt-3 d-flex justify-content-center">
            <button type="submit" className="btn btn-primary">
              Reserve
            </button>
          </div>
        </form>
      </div>

    </section>
  );
};

export default Reserve;
