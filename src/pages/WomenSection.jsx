import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const WomenSection = () => {
  const [women, setWomen] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => {
        setWomen(response.data);
        console.log("WomenSection fetched successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching WomenSection:", error);
      });
  }, []);
  return (
    <>
      <div className="mt-26 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4  ">
        {women.length > 0 ? (
          women.map((womens) => (
            <Link to={`/products/${womens.id}`} key={womens.id}>
              <div key={womens.id} className=" p-4 rounded-lg shadow-md">
                <img
                  src={womens.image}
                  alt={womens.title}
                  className="h-40 w-40 object-contain mx-auto"
                />
                <div className=" shadow-md p-3 rounded-2xl m-2">
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="bg-gray-200 rounded-full px-2 py-1 m-1">
                      {womens.category}
                    </h1>
                  </div>
                  <h2>{womens.title}</h2>
                  <p>Price: ${womens.price}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default WomenSection;
