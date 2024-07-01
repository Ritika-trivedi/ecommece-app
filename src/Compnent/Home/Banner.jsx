import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import first from "./first.jpg";

const Banner = () => {
  return (
    <div className=" bg-white py-12 x1:px-28 px-4">
      <div className="py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14">
        {/*image */}
        <div className="md:w-1/2">
          <img src={first} style={{ padding: 40 }}></img>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-light mb-5"> Collections</h1>
          <p className="text-xl mb-7">
            Explore and shop diverse collections from top brands all in one
            place. Find the latest trends and timeless classics for every taste
            and occasion. Enjoy a seamless shopping experience with quality you
            can trust.
          </p>
          <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex items-center gap-2">
            <FaShoppingBag className="inline-flex" />
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
