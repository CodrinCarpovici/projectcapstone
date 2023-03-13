import React from "react";
import dataT from "./dataT";
import Testimonial from "./Testimonial";

const Testimonials = ({ id }) => {
  return (
    <section className="container-fluid p-2" id={id}>
      <div className="container">
        <div className="container d-flex justify-content-center">
          <h1 id="testimonials-title">Testimonials</h1>
        </div>

        <div className="row">
          {dataT.map((data) => (
            <Testimonial
              key={data.name + "#"}
              img={data.img}
              title={data.title}
              name={data.name}
              description={data.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
