import React from "react";
import footerLogo from "../assets/footerLogo.png";

const Footer = ({ id }) => {
  return (
    <footer id={id} className="container-fluid pt-3 mt-auto">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <a>
              <img src={footerLogo} className="img-fluid"></img>
            </a>
          </div>
          <div className="col mt-3">
            <h3>Navigation</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#reservations">Reservations</a>
              </li>
              <li>
                <a href="#order-online">Order Online</a>
              </li>
              <li>
                <a href="#login">Login</a>
              </li>
            </ul>
          </div>
          <div className="col mt-3">
            <h3>Contact</h3>
            <ul>
              <li>Little Lemon Address, 555</li>
              <li>Phone Number: + 555 5555 5555</li>
              <li>
                email: <a href="#">littlelemon@email.com</a>
              </li>
            </ul>
          </div>
          <div className="col mt-3">
            <h3>Social Links</h3>
            <ul>
              <li>
                <a href="#">Instagram Link</a>
              </li>
              <li>
                <a href="#">Facebook Link</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
