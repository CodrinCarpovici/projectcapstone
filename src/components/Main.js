import React from "react";
import Header from "./Header";
import Specials from "./Specials";
import Testimonials from "./Testimonials";

const Main = ({ id }) => {
  return (
    <main id={id}>
      {" "}
      <Header id="main-header" />
      <Specials id="specials" />
      <Testimonials id="testimonials" />
    </main>
  );
};

export default Main;
