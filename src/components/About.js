import React from "react";
import restaurant from "../assets/restaurant.jpg";
import marioAndAdrian from "../assets/Mario and Adrian A.jpg";

const About = ({ id }) => {
  return (
    <section id={id} className="container-fluid p-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 id="about-title">Little Lemon</h1>
            <h2 id="about-subtitle">Chicago</h2>
            <p id="about-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Nulla interdum enim quis
              eros semper elementum. Vestibulum ac enim eu ex rhoncus porttitor.
              Phasellus vitae ante elementum, blandit tortor ac, pellentesque
              nisl. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Pellentesque ultrices quam at
              mi iaculis, tempus dictum sapien vehicula.
            </p>
          </div>
          <div className="col">
            <img
              src={restaurant}
              className="img-fluid top-img"
              alt="restaurant"
            />
            <img
              src={marioAndAdrian}
              className="img-fluid bottom-img"
              alt="mario and adrian"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
