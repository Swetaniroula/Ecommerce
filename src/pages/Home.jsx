import React from "react";
import Navbar from "./../components/Navbar";
import Hero from "./../assets/Back.jpg";
import Notification from "../components/Notification";
import Products from "./Products";

const Home = () => {
  return (
    <>
      <div className="mt-24">
        <Notification />
      </div>
      <div className="relative h-[90vh] w-full">
        <img
          src={Hero}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-end justify-center right-8">
          <h1 className="text-black text-4xl font-bold drop-shadow-lg whitespace-nowrap">
            Fashion Sale - Up to 50% Off!
          </h1>
          <h1 className="text-gray-400 text-3xl whitespace-nowrap">
            Minimal Style
          </h1>
          <div>
            <button className="bg-black text-white items-center px-6 py-3 mt-4 rounded-full shadow-md">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-xl font-bold ml-5  underline-offset-2">
          Explore the Products....
        </div>
        <Products />
      </div>
    </>
  );
};

export default Home;
