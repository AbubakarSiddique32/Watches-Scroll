import React from "react";
import { FaApple } from "react-icons/fa";
const Details = [<FaApple />, "Apple Store", "Mac", "iPad", "Phone", "Watches"];

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          {Details.map((Detail, index) => {
            <li key={index}>
              <a href="">{Detail}</a>
            </li>;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
