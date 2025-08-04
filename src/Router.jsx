import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import MenSection from "./pages/MenSection";
import WomenSection from "./pages/WomenSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jewellery from "./pages/Jewellery";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
const Router = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/men-products" element={<MenSection />} />
          <Route path="/women-products" element={<WomenSection />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Router;
