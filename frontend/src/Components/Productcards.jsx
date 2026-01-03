import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

const Productcards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <p className="text-gray-600 text-xl animate-pulse">
          Loading products...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 mt-20 text-lg font-semibold">
        {error}
      </div>
    );
  }

  return (
    <section
      id="products"
      className="py-14 bg-gradient-to-b from-gray-50 via-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl  text-indigo-600  md:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text tracking-tight">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            Handpicked collection curated for performance & style
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 text-lg">
              No products available.
            </div>
          ) : (
            products.map((product) => (
              <div
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
                className="group bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-200"
              >
                <div className="h-52 bg-gray-100 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-2xl font-bold text-indigo-600">
                    ₹{product.price}
                  </p>

                  <button className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium shadow hover:opacity-90 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Productcards;
