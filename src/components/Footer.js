import React from "react";
import footerLogo from "../assets/footerLogo.png";

const Footer = ({id}) => {
  return (
    <div id={id}>
      <img src={footerLogo}></img>
      <h3>Navigation</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h3>Contact</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <h3>Social Links</h3>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;
