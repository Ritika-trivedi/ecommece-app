import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleButton = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { title: "jewelery & Accessories", path: "/" },
    { title: "Cloth & Shoes", path: "/" },
    { title: "Home & Living", path: "/" },
    { title: "Wedding & Party", path: "/" },
    { title: "Toys & Entertainment", path: "/" },
    { title: "Art & Collections", path: "/" },
    { title: "Crafts Supplies & Tools", path: "/" },
  ];
  return (
    <header className="max-w-screen-2x1 x1:px-28 px-4 absolute top-0 left-0 right-0">
      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block"></FaSearch>
        {/*logo*/}
        <a href="/">
          <img src="logo3.png" style={{ width: 150, height: 150 }}></img>
        </a>

        {/* ACCount and Shopping cart btn*/}
        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-10">
            <FaUser />
            Account
          </a>
          <a href="/" className="flex items-center gap-10">
            <FaShoppingCart />
            Shopping
          </a>
        </div>

        {/*navbar for sm devices*/}
        <div className="sm:hidden">
          <button onClick={toggleButton}>
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-Black" />
            ) : (
              <FaBars className="w-5 h-5 text-Black" />
            )}
          </button>
        </div>
      </nav>

      <hr />
      {/* category items*/}
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-Black hidden">
          {navItems.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-500">
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* ONLY MOBLIE MENU ITEMS*/}
      <div className="pt-4">
        <ul
          className={`bg-Black text-white px-4 py-2 rounded  ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className="hover:text-orange-500 my-3 cursor-pointer"
            >
              <Link to="/">{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
