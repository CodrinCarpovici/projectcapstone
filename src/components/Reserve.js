import React from "react";
import backArrow from "../assets/backArrow.png";
import clockIcon from "../assets/clockIcon.svg";
import customerIcon from "../assets/customerIcon.svg";
import dishIcon from "../assets/dishIcon.svg";
import tableIcon from "../assets/tableIcon.svg";
import restaurant from "../assets/restaurant.jpg";
import { Link } from "react-router-dom";

const Reserve = ({ id }) => {
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
      <div className="container header">
        <div className="container img-container">
          <img
            src={restaurant}
            alt="restaurant photo"
            className="img-fluid header-img"
          />
        </div>
        <div className="container details-text p-4">
          <div className="container date ">
            <h2>March {/*Replace with form inputs */}</h2>
            <h1>10 {/*Replace with form inputs */}</h1>
            <h2>Saturday {/*Replace with form inputs */}</h2>
          </div>
          <h2>Little Lemon</h2>
          {/*Replace with inputs */}
          <p>
            <img src={customerIcon} alt="customer icon" className="pe-3" />
            Table for 4 people
          </p>
          <p>
            <img src={clockIcon} alt="clock icon" className="pe-3" />
            19:00
          </p>
          <p>
            <img src={tableIcon} alt="table icon" className="pe-3" />
            Outside
          </p>
          <p>
            <img src={dishIcon} alt="dish icon" className="pe-3" />
            Birthday
          </p>
        </div>
      </div>
      <div className="container p-4 form">
        <form>
          <div className="mb-3">
            <label htmlFor="inputName">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="inputName"
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
            <Link to="/confirmation" type="submit" className="btn btn-primary">
              Reserve
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Reserve;
