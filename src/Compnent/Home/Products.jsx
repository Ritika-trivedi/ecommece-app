import React, { useEffect, useState } from "react";

import { FaFilter } from "react-icons/fa";
import Card from "../Card";
import Category from "./Category";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("products.json");
        const data = await response.json();
        //console.log(data);
        setProducts(data);
        setFilteredItems(data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(products);
  //fitering function
  const filterItems = (category) => {
    const filterd =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItems(filterd);
    selectCategory(category);
  };
  //show all product
  const showAll = () => {
    setFilteredItems(products);
    selectCategory("all");
  };
  //sorting function
  const handleSortChange = (option) => {
    setSortOption(option);
    //logic for sorting
    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "Low-to-High":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "High-to-Low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2x1 container mx-auto x1:px-28 px-4 mb-12">
      <h2 className="text-3x1 font-semibold capitalize text-center my-8">
        Or Subscribe to the newsletter
      </h2>
      {/*product card */}
      <div>
        <div className="flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-12">
          {/* all button */}
          <div
            className="flex flex-row justify-start
        md-items-center md-items-center md:gap-8 gap-4 flex-wrap"
          >
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("Dress")}>Clothing</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodie</button>
            <button onClick={() => filterItems("Bag")}>bags</button>
          </div>
          {/*sorting option */}
          <div className="flex  justify-end mb-4 rounded-sm">
            <div className="bg-black p-2">
              <FaFilter className="text-white h-4 w-4" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-black text-white px-2 py-1 rounded-sm"
            >
              <option value="default">default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="Low-to-High">Low to High</option>
              <option value="High-to-Low">High to Low</option>
            </select>
          </div>
        </div>
        <Card filterItems={filteredItems}></Card>
      </div>
    </div>
  );
};

export default Products;
