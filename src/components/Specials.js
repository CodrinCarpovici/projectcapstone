import React from "react";
import Card from "./Card";

const Specials = () => {
  return (
    <div className="container" id="specials">
      <div className="row">
        <div className="col">
          <h1 id="specials-title">This Week's Specials</h1>
        </div>
        <div className="col btn-container">
          <a
            className="btn btn-primary float-end"
            href="#reserve"
            role="button"
          >
            Online Menu
          </a>
        </div>
      </div>
      <div className="row">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Specials;
