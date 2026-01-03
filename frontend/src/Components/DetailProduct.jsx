import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../config";

const DetailProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Error fetching product:", err);
      });
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    const prodId = product._id ?? product.id ?? id;
    const cartRaw = localStorage.getItem("cart");
    let cart = [];

    try {
      cart = cartRaw ? JSON.parse(cartRaw) : [];
    } catch (err) {
      console.error("Error parsing cart from localStorage:", err);
      cart = [];
    }

    const existing = cart.find((item) => item.id === prodId);
    if (existing) {
      existing.qty = Number(existing.qty) + 1;
    } else {
      cart.push({
        id: prodId,
        name: product.name,
        price: Number(product.price) || 0,
        imageUrl: product.imageUrl || "",
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      theme: "colored",
    });
  };

  if (!product) {
    return (
      <div className="text-center mt-20 text-gray-600 text-xl">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 p-10 bg-gray-50 min-h-screen">
      <div className="w-full md:w-1/3">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-3xl shadow-lg w-full object-cover"
        />
      </div>

      <div className="md:w-1/2 bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {product.name}
        </h1>
        <p className="text-gray-600 mb-4 text-lg">
          {product.description || "No description available for this product."}
        </p>
        <div className="text-2xl font-semibold text-indigo-600 mb-6">
          ₹{product.price}
        </div>

        <div className="flex gap-4">
          <button
            onClick={addToCart}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl hover:bg-blue-600 transition duration-300 shadow-md"
          >
            Add to Cart
          </button>

          <button
            onClick={() => navigate("/")}
            className="border border-gray-400 text-gray-700 px-8 py-3 rounded-xl hover:bg-gray-200 transition duration-300"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
