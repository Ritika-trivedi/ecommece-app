import React from "react";
import { Link } from "react-router-dom";

const Card = ({ filterItems }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-center gap-12 shadow-sm">
      {filterItems.map((item) => (
        <div key={item.id}>
          <Link to={`/shop/${item.id}`}>
            <img
              src={item.image}
              className="mx-auto w-full hover:scale-105 transition-all duration-300"
            ></img>
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-2">
              <p>{item.title}</p>
            </h4>
            <div className="flex justify-between">
              <p className="text-black/50">{item.category}</p>
              <p className="font-semibold">{item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
