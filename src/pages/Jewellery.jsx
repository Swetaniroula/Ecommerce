import axios from "axios";
import React, { useState, useEffect } from "react";

const Jewellery = () => {
  const [jewellery, setJewellery] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/jewelery")
      .then((response) => {
        setJewellery(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the jewellery data!", error);
      });
  }, []);
  return (
    <>
      <div className="mt-26 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4  ">
        {jewellery.length > 0 ? (
          jewellery.map((jewelleries) => (
            <div key={jewelleries.id} className=" p-4 rounded-lg shadow-md">
              <img
                src={jewelleries.image}
                alt={jewelleries.title}
                className="h-40 w-40 object-contain mx-auto"
              />
              <div className=" shadow-md p-3 rounded-2xl m-2">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="bg-gray-100 rounded-full px-2 py-1 m-1">
                    {jewelleries.category}
                  </h1>
                </div>
                <h2>{jewelleries.title}</h2>
                <p>Price: ${jewelleries.price}</p>
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

export default Jewellery;
