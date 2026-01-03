import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Success = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    localStorage.removeItem("cart");

    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center px-6">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg text-center">
        <div className="flex justify-center mb-6">
          <CheckCircleIcon className="w-20 h-20 text-green-500" />
        </div>

        <h1 className="text-3xl font-semibold text-gray-800 mb-3">
          Payment Successful 🎉
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your payment has been processed
          successfully.
        </p>

        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
          <p className="text-green-700 text-sm">
            Redirecting to homepage in{" "}
            <span className="font-semibold">{countdown}</span> seconds...
          </p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-lg bg-green-400 font-medium hover:bg-gray-300 transition"
        >
          Go Home Now
        </button>
      </div>
    </div>
  );
};

export default Success;
