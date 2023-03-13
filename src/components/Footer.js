import React from "react";
import footerLogo from "../assets/footerLogo.png";

const Footer = ({id}) => {
  return (
    <footer id={id}>
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
    </footer>
  );
};

export default Footer;
