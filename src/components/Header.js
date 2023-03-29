import React from "react";
import { Link } from "react-router-dom";
import restaurantFood from "../assets/restauranfood.jpg";

const Header = ({ id }) => {
  return (
    <header id={id} className="container-fluid p-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 id="main-title">Little Lemon</h1>
            <h2 id="main-subtitle">Chicago</h2>
            <p id="main-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/booking-details" aria-label="On Click" className="btn btn-primary" role="button">
              Reserve a Table
            </Link>
          </div>
          <div className="col d-none d-md-block">
            <div className="container img-container ">
              <img
                src={restaurantFood}
                className="rounded img-fluid header-img"
                alt="Header"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
