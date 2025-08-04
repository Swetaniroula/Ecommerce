import axios from "axios";
import React, { useEffect, useState } from "react";

const MenSection = () => {
  const [mens, setMens] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => {
        setMens(response.data);
        console.log("MensSection fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching MensSection:", error);
      });
  }, []);

  return (
    <>
      <div className="mt-26 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4  ">
        {mens.length > 0 ? (
          mens.map((men) => (
            <div key={men.id} className=" p-4 rounded-lg shadow-md">
              <img
                src={men.image}
                alt={men.title}
                className="h-40 w-40 object-contain mx-auto"
              />
              <div className=" shadow-md p-3 rounded-2xl m-2">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="bg-gray-100 rounded-full px-2 py-1 m-1">
                    {men.category}
                  </h1>
                </div>
                <h2>{men.title}</h2>
                <p>Price: ${men.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default MenSection;
