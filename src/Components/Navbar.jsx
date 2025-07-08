import React from "react";
import { FaApple } from "react-icons/fa";

// Updated Details array with object structure for icon and text
const Details = [
  { icon: <FaApple />, text: "Apple Store" },
  { icon: "", text: "Mac" },
  { icon: "", text: "iPad" },
  { icon: "", text: "Phone" },
  { icon: "", text: "Watches" },
];

const Navbar = () => {
  return (
    <div>
      <nav className="flex">
        <ul className="flex items-center list-none">
          {Details.map((detail, index) => {
            return (
              <li key={index} className="flex no-underline bg-red ">
                <a href="" className="flex items-center space-x-2">
                  {detail.icon && <span>{detail.icon}</span>}
                  {/* Render icon if exists */}
                  <span>{detail.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
