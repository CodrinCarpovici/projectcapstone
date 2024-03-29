import React from "react";
import cartIcon from "../assets/Basket.svg";

const Card = (props) => {
  return (
    <article className="card col-sm p-0 me-2 mb-3">
      <img className="card-img-top" src={props.img} alt="" />
      <div className="card-body" id="card-section">
        <h5 className="card-title name">{props.title}</h5>
        <h5 className="card-title name">{props.price}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer">
        <button
          aria-label="On Click"
          href="#delivery"
          className="btn btn-primary"
        >
          Order a delivery{" "}
          <img
            className="img-fluid shopping-icon"
            src={cartIcon}
            alt="shopping cart"
          />
        </button>
      </div>
    </article>
  );
};

export default Card;
