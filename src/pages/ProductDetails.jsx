import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [id]);
  if (!product) return <div>Loading...</div>;
  return (
    <div className="flex flex-row p-8 mt-35">
      <div className="w-1/2 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-80 w-80 object-contain shadow-lg rounded-lg p-4"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <div className="flex">
          <p className="bg-gray-200 rounded-full px-2 py-1 mb-5">
            Category: {product.category}
          </p>
        </div>
        <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
        <p className="mb-2">{product.description}</p>
        <p className="font-semibold">Price: ${product.price}</p>
        <div className="flex mt-4">
          <button
            onClick={() => navigate("/cart")}
            className="bg-black text-white px-6 py-3 mt-2 md:mt-1 whitespace-nowrap rounded-full "
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
