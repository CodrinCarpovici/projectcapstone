import React from "react";
import About from "./About";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Main = ({id}) => {
  return (
    <div id={id}>
      {" "}
      <Specials id="specials"/>
      <Testimonials id="testimonials"/>
      <About id="about"/>
    </div>
  );
};

export default Main;
