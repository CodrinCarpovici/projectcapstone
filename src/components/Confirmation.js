import React, { useContext } from "react";
import calendarPlusIcon from "../assets/calendarPlusIcon.svg";
import shareIcon from "../assets/shareIcon.svg";
import calendarIcon from "../assets/calendarIcon.svg";
import clockIcon from "../assets/clockIcon.svg";
import customerIcon from "../assets/customerIcon.svg";
import dishIcon from "../assets/dishIcon.svg";
import tableIcon from "../assets/tableIcon.svg";
import goingIcon from "../assets/goingIcon.svg";
import FormDataContext from './FormDataContext';

const Confirmation = (props) => {
  const { formData } = useContext(FormDataContext);

  return (
    <section className="container-fluid" id={props.id}>
      <div className="container details-header pb-4">
        <div className="container">
          <div className="d-flex flex-row justify-content-center p-0">
            <h1 id="reserve-title" className="pt-5">Booking Confirmed!</h1>
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
        <div className="container details-text p-0">
          <h1 className="mb-4">Little Lemon</h1>
          {/*Replace with inputs */}
          <p>
            <img src={calendarIcon} alt="calendar icon" className="pe-3" />
            {formData.date}
          </p>
          <p>
            <img src={customerIcon} alt="customer icon" className="pe-3" />
            Table for {formData.date} people
          </p>
          <p>
            <img src={clockIcon} alt="clock icon" className="pe-3" />
            19:00
          </p>
          <p>
            <img src={tableIcon} alt="table icon" className="pe-3" />
            Outside
          </p>
          <p className="mb-3">
            <img src={dishIcon} alt="dish icon" className="pe-3" />
            Birthday
          </p>
          <button className="btn btn-primary mb-4">Manage Booking</button>
        </div>
      </div>
      <div className="container customer-section">
        <h1>Who's going?</h1>
        {/*Replace with inputs */}
        <p className="customer-details ms-3">
          <img src={goingIcon} alt="img-fluid customer avatar" />
          &nbsp; + 3 people
        </p>
        <p className="customer-details ms-1"> Larry Watson </p>
        <h2>Email Confirmation</h2>
        <p className="mb-4">
          An email confirmation with your booking details has been sent to you.
          We look forward to having you dine with us!
        </p>
      </div>
    </section>
  );
};

export default Confirmation;
