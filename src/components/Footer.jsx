// import React from "react";
// import { CiFacebook } from "react-icons/ci";
// import { CiInstagram } from "react-icons/ci";
// import { FaTiktok } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <>
//       <div className="bg-black text-white ">
//         <div className="flex flex-col w-1/5 mx-auto items-center justify-center p-4">
//           <h1>MINIMALIST STYLE</h1>
//           <p className="">Make your Fashion Classy and Stylish</p>
//         </div>
//         <div className="w-1/2">
//           <input type="email" required className="border-2 border-white" />
//           <button className="text-white bg-pink-400 rounded-r-xl px-2 py-[0.9px] ">
//             Email
//           </button>
//         </div>
//         <div>
//           <h1>Contact us</h1>
//           <ul className="flex items-center justify-center gap-4 text-xl">
//             <li>
//               <CiFacebook />
//             </li>
//             <li>
//               <CiInstagram />
//             </li>
//             <li>
//               <FaTiktok />
//             </li>
//           </ul>
//         </div>
//         <hr />
//         <div>
//           <p className="text-center">
//             © 2025 Minimalist Style ♡. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Footer;

import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black text-white pt-10 mt-30 pb-4 w-full">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-2 tracking-wide">
            MINIMALIST STYLE
          </h1>
          <p className="text-gray-300">Make your Fashion Classy and Stylish</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <form className="flex w-full max-w-xs">
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 px-4 py-2 rounded-l-xl border-2 border-white focus:outline-none text-white"
            />
            <button
              type="submit"
              className="bg-pink-400 text-white px-4 py-2 rounded-r-xl font-semibold hover:bg-pink-500 transition"
            >
              Email
            </button>
          </form>
        </div>

        <div className="flex flex-col items-center  md:items-end">
          <h2 className="text-lg font-semibold mb-2 ">Connect Us</h2>
          <ul className="flex gap-6 text-2xl ">
            <li>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-pink-400 transition"
              >
                <CiFacebook />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-400 transition"
              >
                <CiInstagram />
              </a>
            </li>
            <li>
              <a
                href="#"
                aria-label="TikTok"
                className="hover:text-pink-400 transition"
              >
                <FaTiktok />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-gray-700" />
      <p className="text-center text-gray-400 text-sm">
        © 2025 Minimalist Style ♡. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
