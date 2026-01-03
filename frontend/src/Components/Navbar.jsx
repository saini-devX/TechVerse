import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();
    setOpen(false);
    const footer = document.getElementById("footer");
    footer?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItem = (path) =>
    `relative px-3 py-2 font-semibold tracking-wide transition-all duration-300
     ${
       location.pathname === path
         ? "text-indigo-600"
         : "text-gray-700 hover:text-indigo-600"
     }
     after:absolute after:left-0 after:-bottom-1 after:h-[2px]
     after:w-full after:scale-x-0 after:bg-indigo-500
     after:transition-transform after:duration-300
     hover:after:scale-x-100`;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg"
          : "bg-transparent backdrop-blur-xl"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo — stays LEFT */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text"
        >
          TechVerse
        </Link>

        {/* All buttons — stay RIGHT */}
        <div className="hidden md:flex items-center gap-10 text-[15px]">
          <Link to="/" className={navItem("/")}>
            Home
          </Link>

          <Link to="/about" className={navItem("/about")}>
            About
          </Link>

          <a
            onClick={handleContactClick}
            href="#footer"
            className={navItem("")}
          >
            Contact
          </a>

          <Link to="/cart" className={navItem("/cart")}>
            Cart
          </Link>
        </div>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col items-center gap-6 py-6 bg-white/95 backdrop-blur-md">

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={navItem("/")}
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className={navItem("/about")}
          >
            About
          </Link>

          <a
            onClick={handleContactClick}
            href="#footer"
            className={navItem("")}
          >
            Contact
          </a>

          <Link
            to="/cart"
            onClick={() => setOpen(false)}
            className={navItem("/cart")}
          >
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
