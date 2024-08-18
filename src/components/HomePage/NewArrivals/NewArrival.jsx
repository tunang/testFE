import newArr1 from "../../../images/newArrivals/newArr1.png";
import newArr2 from "../../../images/newArrivals/newArr2.png";
import newArr3 from "../../../images/newArrivals/newArr3.png";
import newArr4 from "../../../images/newArrivals/newArr4.png";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import ProductBox from "../../Products/ProductBox";

const NewArrivals = () => {
  const products = [
    {
      thumbnail: newArr1,
      title: "Square Textured Striped",
      rating: 4.2,
      price: 150,
      salePrice: null,
      salePercent: null,
      isSoldOut: true,
      isPreOrder: false,
      colors: ['#272D43','#A93A3A', '#E1D6C7 ' ]
    },

    {
      thumbnail: newArr2,
      title: "Square Textured Striped",
      rating: 4.2,
      price: 150,
      salePrice: 200,
      salePercent: null,
      isSoldOut: false,
      isPreOrder: false,
      colors: ['#EEEEEE',' #D6D6D6', '#C2CADF' ]

    },

    {
      thumbnail: newArr3,
      title: "Square Textured Striped",
      rating: 4.2,
      price: 150,
      salePrice: 135,
      salePercent: '-10%',
      isSoldOut: false,
      isPreOrder: true,
      colors: ['#08382C','#492919', '#DFD3C2' ]

    },

    {
      thumbnail: newArr4,
      title: "Square Textured Striped",
      rating: 4.2,
      price: 150,
      salePrice: null,
      salePercent: null,
      isSoldOut: false,
      isPreOrder: false,
      colors: ['#111111','#A93A3A', '#E1D6C7' ]

    },
  ];

  let [productIndex, setProductIndex] = useState("");
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div>

      {/* New arrivals header section */}
      <div className="grid grid-cols-12 gap-5 mt-[100px]">
        <div className="flex flex-col items-center col-start-1 col-end-13 font-normal">
          <h1>New Arrivals</h1>
          <p className="text-center mt-[25px]">
            Here’s some of our new arrivals products people are in love with.
          </p>
        </div>
      </div>

      {/* Products section desktop*/}
      <div className="hidden lg:grid grid-cols-12 gap-5 pt-12">
        {products?.map((product, index) => {
          return (
            <div className="col-span-6 xl:col-span-3">
              <ProductBox
                product={product}
                index={index}
                productIndex={productIndex}
                setProductIndex={setProductIndex}
              />
            </div>
          );
        })}
      </div>

      {/* Products section mobile*/}

      <div className="">
        <div className="lg:hidden flex justify-center items-center  mt-[20px] gap-[10px]">
          <div ref={prevRef} ><FaChevronLeft className="h-[40px] w-[40px] text-center border border-senary rounded-full p-[8px]"/></div>
          <div ref={nextRef} ><FaChevronRight className="h-[40px] w-[40px] text-center border border-senary rounded-full p-[8px]"/></div>
        </div>
        <Swiper
          speed={800}
          spaceBetween={20}
          // navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={2}
          className="lg:hidden grid grid-cols-12 gap-[30px] pt-[20px]"
        >
          {products?.map((product, index) => {
            return (
              <SwiperSlide className="col-span-12 md:col-span-6 lg:col-span-3">
                <ProductBox
                  product={product}
                  index={index}
                  productIndex={productIndex}
                  setProductIndex={setProductIndex}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
