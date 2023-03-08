import React from "react";
import restaurantFood from '../assets/restauranfood.jpg';

const Header = ({ id }) => {
  return (
    <div id={id}>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </p>
      <a>Reserve a Table</a>
      <img src={restaurantFood} class="img-fluid" alt="Header Image"></img>
    </div>
  );
};

export default Header;
