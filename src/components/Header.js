import React from "react";
import restaurantFood from "../assets/restauranfood.jpg";

const Header = ({ id }) => {
  return (
    <header id={id} className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 id="main-title">Little Lemon</h1>
            <h2 id="main-subtitle">Chicago</h2>
            <p id="main-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a className="btn btn-primary" href="#reserve" role="button">
              Reserve a Table
            </a>
          </div>
          <div className="col">
            <div className="container img-container">
              <img
                src={restaurantFood}
                className="rounded float-start header-img"
                alt="Header Image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
