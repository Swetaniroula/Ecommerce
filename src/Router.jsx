import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import MenSection from "./pages/MenSection";
import WomenSection from "./pages/WomenSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jewellery from "./pages/Jewellery";
const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/men-products" element={<MenSection />} />
        <Route path="/women-products" element={<WomenSection />} />
        <Route path="/jewellery" element={<Jewellery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
