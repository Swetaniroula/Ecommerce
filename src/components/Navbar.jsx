import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/CloLogo.jpg";
import Jewellery from "./../pages/Jewellery";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-60 bg-white flex items-center shadow-md p-4 justify-between">
        <div>
          <img src={Logo} className="h-16 w-16 rounded-full " />
        </div>
        <div className="flex items-center justify-center">
          <ul className="flex bg-white rounded-full gap-8 md:gap-25 shadow-md p-4 md:px-8 ml-3 mr-3">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/men-products">
              <li>Mens</li>
            </Link>
            <Link to="/women-products">
              <li>Womens</li>
            </Link>
            <Link to="/Jewellery">
              <li>Jewellery</li>
            </Link>
          </ul>
        </div>

        <div className="flex items-center">
          <button className="bg-black text-white px-6 py-3 mt-2 md:mt-1 whitespace-nowrap rounded-full ">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
