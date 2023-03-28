import React, {useState} from "react";
import backArrow from "../assets/backArrow.png";
import calendarIcon from "../assets/calendarIcon.svg";
import clockIcon from "../assets/clockIcon.svg";
import customerIcon from "../assets/customerIcon.svg";
import dishIcon from "../assets/dishIcon.svg";
import tableIcon from "../assets/tableIcon.svg";
import restaurant from "../assets/restaurant.jpg";
import { useNavigate } from "react-router-dom";

const Reserve = (props) => {
  const navigate = useNavigate();
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [isValid, setIsValid] = useState(true);

  const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const validateForm = () => {
    let formisValid = true;
  
    if (!props.fullName) {
      setFullNameError("Please add your name");
      formisValid = false;
    } else {
      setFullNameError("");
    }
  
    if (!props.email) {
      setEmailError("Please add your email");
      formisValid = false;
    } else {
      setEmailError("");
    }

    //Check if it's a real email
    if (!isEmail(props.email)) {
      setEmailError("Please add a valid email");
    }
  
    if (!props.phoneNumber) {
      setPhoneNumberError("Please add your phone number");
      formisValid = false;
    } else {
      setPhoneNumberError("");
    }
  
    setIsValid(formisValid);
    return formisValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      props.detailsFormIsSubmitted();
    }
  };

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
            alt="restaurant"
            className="img-fluid header-img"
          />
        </div>
        <div className="container  details-text p-4">
          <h2 className="text-center">Little Lemon</h2>
          {/*Replace with inputs */}
          <p>
            <img src={calendarIcon} alt="calendar icon" className="pe-3" />
            {props.date ? props.date.toLocaleDateString() : ''}
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
              className={`form-control ${!isValid && fullNameError && "is-invalid"}`}
              id="inputName"
              name="Full Name"
              placeholder="Full Name..."
              onChange={(e) => props.setFullName(e.target.value)}
              required
            />
            {!isValid && <span className="error-message">{fullNameError}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="inputEmail" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className={`form-control ${!isValid && emailError && "is-invalid"}`}
              id="inputEmail"
              name="Email Address"
              aria-describedby="emailHelp"
              placeholder="Email Address..."
              onChange={(e) => props.setEmail(e.target.value)}
              required
            />
            {!isValid && <span className="error-message">{emailError}</span>}
            
          </div>
          <div className="mb-3">
            <label htmlFor="inputPhoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className={`form-control ${!isValid && phoneNumberError &&"is-invalid"}`}
              id="inputPhoneNumber"
              name="Phone Number"
              placeholder="Phone Number..."
              onChange={(e) => props.setPhoneNumber(e.target.value)}
              required
            />
            {!isValid && <span className="error-message">{phoneNumberError}</span>}
            <div id="emailHelp" className="form-text">
              We'll never share your email or phone number with anyone else.
            </div>
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
