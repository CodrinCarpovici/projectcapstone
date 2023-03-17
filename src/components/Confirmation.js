import React from "react";
import calendarPlusIcon from "../assets/calendarPlusIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import calendarIcon from "../assets/calendarIcon.svg";
import clockIcon from "../assets/clockIcon.svg";
import customerIcon from "../assets/customerIcon.svg";
import dishIcon from "../assets/dishIcon.svg";
import tableIcon from "../assets/tableIcon.svg";
import goingIcon from "../assets/goingIcon.svg";

const Confirmation = ({ id }) => {
  return (
    <section className="container-fluid" id={id}>
      <div className="container details-header pb-4">
        <div className="container">
          <div className="d-flex flex-row justify-content-center p-0">
            <h1 id="reserve-title">Booking Confirmed!</h1>
          </div>
        </div>
      </div>
      <div className="container icons-section d-flex flex-row justify-content-end p-0 mt-2">
        <button className="btn">
          <img src={calendarPlusIcon} alt="add to calendar" />
        </button>
        <button className="btn">
          <img src={shareIcon} alt="share booking" />
        </button>
      </div>
      <div className="container details-section">
        <div className="container details-text p-4">
          <div className="container date ">
            <h2>March {/*Replace with form inputs */}</h2>
            <h1>10 {/*Replace with form inputs */}</h1>
            <h2>Saturday {/*Replace with form inputs */}</h2>
          </div>
          <h2>Little Lemon</h2>
          {/*Replace with inputs */}
          <p>
            <img src={calendarIcon} alt="calendar icon" className="pe-3" />
            Table for 4 people
          </p>
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
      <div className="container customer-section">
        <h1>Who's going?</h1>
        <p className="">
          <img src={goingIcon} alt="customer avatar" />
          + 3 people
        </p>
        <p> Larry Watson </p>
        <h2>Email Confirmation</h2>
        <p>
          An email confirmation with your booking details has been sent to you.
          We look forward to having you dine with us!
        </p>
      </div>
    </section>
  );
};

export default Confirmation;
