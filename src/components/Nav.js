import React from "react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

//FIX NAVBAR COLLAPSE

const Nav = ({ id }) => {
  return (
    <nav id={id} className="navbar sticky-top navbar-expand-lg p-3">
      <div className="container p-0">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => localStorage.clear()}
        >
          <img src={Logo} alt="Logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                aria-current="page"
                onClick={() => localStorage.clear()}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" href="#about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/booking-details"
                className="nav-link"
                onClick={() => localStorage.clear()}
              >
                Reservations
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#order-online">
                Order Online
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#login">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
