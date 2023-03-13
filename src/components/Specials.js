import React from "react";
import Card from "./Card";
import data from "./data.js";

const Specials = () => {
  return (
    <section className="container-fluid p-3">
      <div className="container" id="specials">
        <div className="row" id="title-section">
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
        <div className="row ">
          {data.map((data) => (
            <Card
              key={data.title}
              img={data.img}
              title={data.title}
              price={data.price}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
