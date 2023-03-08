import React from "react";
import About from "./About";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Main = ({id}) => {
  return (
    <div id={id}>
      {" "}
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
};

export default Main;
