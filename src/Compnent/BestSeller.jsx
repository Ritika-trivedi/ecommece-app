import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const BestSellers = products.filter((item) => item.status === "Best Selers");
  //console.log(BestSeller);

  return (
    <div className="max-w-screen-2x1 container mx-auto x1:px-28 px-4">
      <div>
        <h2 className="text-3xl font-semibold capitalize text-center my-8">
          Best Sellers
        </h2>
        <p className="text-Black/75 capitalize mx-auto mb-8">
          Pain itself is love, it will be followed by the desire to be great,
          but there is no time to achieve it, and a lot of pain
        </p>
        {/*best seller product carts  */}
        <div className="mb-16">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {BestSellers.map((product) => (
              <SwiperSlide key={product.id}>
                <Link to={`/shop/${product.id}`}>
                  <img
                    src={product.image}
                    className="mx-auto w-full hover:scale-105 transition-all duration-300"
                  ></img>
                </Link>
                <div className="mt-4 px-4">
                  <h4 className="text-base font-semibold mb-2">
                    <p>{product.title}</p>
                  </h4>
                  <div className="flex justify-between">
                    <p className="text-black/50">{product.category}</p>
                    <p className="font-semibold">{product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;