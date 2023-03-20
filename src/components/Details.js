import React from "react";
import backArrow from "../assets/backArrow.png";
import Datepicker from "./Datepicker";
import restaurantChefB from "../assets/restaurantChefB.jpg";
import { Link } from "react-router-dom";
import DetailsForm from "./DetailsForm.js";

const Details = ({ id }) => {
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
      <div className="container p-0">
        <div className="container img-container p-0">
          <img
            src={restaurantChefB}
            alt="Chef Cooking B"
            className="img-fluid details-img"
          />
        </div>
        <DetailsForm />
      </div>
    </section>
  );
};

export default Details;
