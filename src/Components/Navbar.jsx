import React from "react";
import { FaApple } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { BiShoppingBag } from "react-icons/bi";
// Updated Details array with object structure for icon and text
const Details = [
  { icon: <FaApple /> },
  { text: "Mac" },
  { text: "iPad" },
  { text: "Phone" },
  { text: "Watch" },
  { text: "AirPods" },
  { text: "TV & Home" },
  { text: "Entertainment" },
  { text: "Accessories" },
  { text: "Support" },
  { icon: <IoSearchOutline /> },
  { icon: <BiShoppingBag /> },
];

const Navbar = () => {
  return (
    <div>
      <nav className="flex px-[100px] py-[30px]">
        <ul className="flex items-center list-none gap-10">
          {Details.map((detail, index) => {
            return (
              <li key={index} className="flex no-underline bg-red ">
                <a href="" className="flex items-center space-x-2">
                  {detail.icon && <span className="">{detail.icon}</span>}
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
