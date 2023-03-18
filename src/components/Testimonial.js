import React from "react";
import star from "../assets/star.png";

const Testimonial = (props) => {
  return (
    <article className="card col-sm me-2 p-0 mb-3">
      <div className="row">
        <div className="col-4">
          <img
            src={props.img}
            className="img-fluid rounded-start profile-img"
            alt={props.name}
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <div className="title-container">
              <h1 className="rating card-title">{props.title}</h1>
              <img src={star} className="img-fluid star-icon" alt="star icon" />
            </div>
            <div className="title-container"></div>
            <h2 className="name">{props.name}</h2>
            <p className="card-text">{props.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Testimonial;
