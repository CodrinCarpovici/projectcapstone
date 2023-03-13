import React from "react";
import Logo from "../assets/Logo.svg";

const Nav = ({ id }) => {
  return (
    <nav id={id} className="navbar sticky-top navbar-expand-lg p-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={Logo} alt="Logo"></img>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#">
              Home
            </a>
            <a className="nav-link" href="#about">
              About
            </a>
            <a className="nav-link" href="#menu">
              Menu
            </a>
            <a className="nav-link" href="#reservations">
              Reservations
            </a>
            <a className="nav-link" href="#order-online">
              Order Online
            </a>
            <a className="nav-link" href="#login">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
