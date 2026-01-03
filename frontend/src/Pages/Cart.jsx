import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config";

const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [address, setAddress] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: "",
    notes: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load cart from localStorage
  useEffect(() => {
    const raw = localStorage.getItem("cart");
    try {
      const parsed = raw ? JSON.parse(raw) : [];
      setCart(parsed);
    } catch (err) {
      console.error("Error parsing cart:", err);
      setCart([]);
    }
  }, []);

  // Save cart
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: Number(qty) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  const deliveryCharge = subtotal > 0 ? 49 : 0;
  const taxes = Math.round(subtotal * 0.12);
  const total = subtotal + deliveryCharge + taxes;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  };

  const validateAddress = () => {
    if (
      !address.fullName ||
      !address.phone ||
      !address.addressLine ||
      !address.city ||
      !address.state ||
      !address.pincode
    ) {
      return "Please fill all required delivery fields.";
    }
    if (!/^[0-9]{6}$/.test(address.pincode)) {
      return "Please enter a valid 6-digit pincode.";
    }
    if (!/^[0-9]{10}$/.test(address.phone)) {
      return "Please enter a valid 10-digit phone number.";
    }
    return "";
  };

  // ⭐ Stripe Checkout ⭐ (no stripePromise needed)
  const handleStripeCheckout = async () => {
    setError("");
    setSuccess("");

    if (cart.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    const validationError = validateAddress();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const res = await fetch(
        `${API_BASE_URL}/api/payment/create-checkout-session`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: total,
            items: cart,
            customer: address,
          }),
        }
      );

      const data = await res.json();

      if (!data?.url) {
        setError("Stripe session failed.");
        return;
      }

      window.location.href = data.url;

    } catch (err) {
      console.error(err);
      setError("Payment failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-10 py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <button
          onClick={() => navigate("/")}
          className="mb-6 bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          ← Back to Home
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>

            {cart.length === 0 ? (
              <div className="text-center py-20 text-gray-500">
                Your cart is empty.
                <div className="mt-4">
                  <button
                    onClick={() => navigate("/")}
                    className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 border rounded-xl p-4"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-28 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          <p className="text-sm text-gray-500">
                            ₹{item.price}
                          </p>
                        </div>
                        <div className="font-medium">
                          ₹{Number(item.price) * Number(item.qty)}
                        </div>
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <label>Qty:</label>
                        <input
                          type="number"
                          min="1"
                          value={item.qty}
                          onChange={(e) =>
                            updateQty(item.id, Number(e.target.value))
                          }
                          className="w-20 border rounded-md px-3 py-1"
                        />
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <aside className="bg-white rounded-2xl p-6 shadow flex flex-col gap-3">
            <h3 className="text-xl font-semibold">Order Summary</h3>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery</span>
              <span>₹{deliveryCharge}</span>
            </div>

            <div className="flex justify-between">
              <span>Taxes</span>
              <span>₹{taxes}</span>
            </div>

            <div className="flex justify-between font-semibold text-lg border-t pt-3">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <h4 className="font-medium mt-3">Delivery Address</h4>

            <div className="grid gap-2">
              <input name="fullName" value={address.fullName} onChange={handleChange} placeholder="Full name*" className="border p-2 rounded" />
              <input name="phone" value={address.phone} onChange={handleChange} placeholder="Phone*" className="border p-2 rounded" />
              <input name="addressLine" value={address.addressLine} onChange={handleChange} placeholder="Address line*" className="border p-2 rounded" />
              <input name="city" value={address.city} onChange={handleChange} placeholder="City*" className="border p-2 rounded" />
              <input name="state" value={address.state} onChange={handleChange} placeholder="State*" className="border p-2 rounded" />
              <input name="pincode" value={address.pincode} onChange={handleChange} placeholder="Pincode*" className="border p-2 rounded" />
              <textarea name="notes" value={address.notes} onChange={handleChange} placeholder="Notes (optional)" className="border p-2 rounded" />
            </div>

            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">{success}</p>}

            <button
              onClick={handleStripeCheckout}
              className="w-full mt-3 bg-green-600 text-white py-3 rounded-lg hover:bg-green-500 transition text-lg font-semibold"
            >
              Pay Now
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;










