import React from "react";
import { Routes, Route } from "react-router-dom";

// UI Layout
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

// Pages & Sections
import Hero from "./Components/Hero.jsx";
import Productdetail from "./Components/Productcards.jsx";
import DetailProduct from "./Components/DetailProduct.jsx";

import About from "./Pages/About.jsx";
import Cart from "./Pages/Cart.jsx";
import Success from "./Pages/Success.jsx";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Productdetail />
            </>
          }
        />

        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<Success />} />

    
        <Route path="/cart" element={<Cart />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <h2 className="text-center mt-20 text-gray-700">
              Page Not Found
            </h2>
          }
        />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </>
  );
};

export default App;
