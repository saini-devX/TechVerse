// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar.jsx";
// import Hero from "./Components/Hero.jsx";
// import Productdetail from "./Components/Productcards.jsx";
// import DetailProduct from "./Components/DetailProduct.jsx";
// import Footer from "./Components/Footer.jsx";
// import About from "./Pages/About.jsx";
// import Cart from "./Pages/Cart.jsx";
// import Success from "./Pages/Success.jsx";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { SignIn, SignUp } from "@clerk/clerk-react";
// import Dashboard from "./Components/Dashboard.jsx";
// import ProtectedRoute from "./Components/ProtectedRoute";

// const App = () => {
//   return (
//     <>
//       <Navbar />

//       <Routes>

//         <Route
//           path="/sign-in"
//           element={
//             <div className="min-h-screen flex justify-center mt-28">
//               <SignIn routing="path" path="/sign-in" />
//             </div>
//           }
//         />

//         <Route
//           path="/sign-up"
//           element={
//             <div className="min-h-screen flex justify-center mt-28">
//               <SignUp routing="path" path="/sign-up" />
//             </div>
//           }
//         />

//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <Dashboard />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <Productdetail />
//             </>
//           }
//         />

//         <Route path="/product/:id" element={<DetailProduct />} />

//         <Route path="/about" element={<About />} />

//         <Route
//           path="/cart"
//           element={
//             <ProtectedRoute>
//               <Cart />
//             </ProtectedRoute>
//           }
//         />
//         <Route path="/success" element={<Success />} />

//         <Route
//           path="*"
//           element={
//             <h2 className="text-center mt-20 text-gray-700">Page Not Found</h2>
//           }
//         />
//       </Routes>
//       <ToastContainer position="top-right" autoClose={2000} />
//       <Footer />
//     </>
//   );
// };

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";

// UI Layout
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";

// Pages & Sections
import Hero from "./Components/Hero.jsx";
import Productdetail from "./Components/Productcards.jsx";
import DetailProduct from "./Components/DetailProduct.jsx";
import Dashboard from "./Components/Dashboard.jsx";
import ProtectedRoute from "./Components/ProtectedRoute.jsx";

import About from "./Pages/About.jsx";
import Cart from "./Pages/Cart.jsx";
import Success from "./Pages/Success.jsx";

// Auth
import { SignIn, SignUp } from "@clerk/clerk-react";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        {/*Auth Routes */}
        <Route
          path="/sign-in"
          element={
            <div className="min-h-screen flex justify-center mt-28">
              <SignIn routing="path" path="/sign-in" />
            </div>
          }
        />

        <Route
          path="/sign-up"
          element={
            <div className="min-h-screen flex justify-center mt-28">
              <SignUp routing="path" path="/sign-up" />
            </div>
          }
        />

        {/*Protected Routes*/}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        {/*Public Routes */}
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

        {/*404  */}
        <Route
          path="*"
          element={
            <h2 className="text-center mt-20 text-gray-700">Page Not Found</h2>
          }
        />
      </Routes>

      <ToastContainer position="top-right" autoClose={2000} />
      <Footer />
    </>
  );
};

export default App;
