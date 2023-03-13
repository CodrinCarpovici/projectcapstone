import React from "react";
import cartIcon from "../assets/Basket.svg";

const Card = (props) => {
  return (
    <article className="card col mx-2 p-0">
      <img className="card-img-top" src={props.img} alt="" />
      <div className="card-body" id="card-section">
        <h5 className="card-title name">{props.title}</h5>
        <h5 className="card-title name">{props.price}</h5>
        <p className="card-text">{props.description}</p>
      </div>
      <div className="card-footer">
        <a href="#delivery" className="btn btn-primary" role="button">
          Order a delivery{" "}
          <img
            className="img-fluid shopping-icon"
            src={cartIcon}
            alt="shopping cart"
          />
        </a>
      </div>
    </article>
  );
};

export default Card;
