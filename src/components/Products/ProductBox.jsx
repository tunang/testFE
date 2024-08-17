import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";

import { AnimatePresence, delay, motion } from "framer-motion";
import { Navigate, useNavigate, useLocation, Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

const modalVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {},
  },

  hover: {
    scale: 1.1,
  },

  click: {
    backgroundColor: "#FFFFFF",
    color: "#000",
    transition: {
      duration: 0.1,
    },
  },
};

const buttonVariants = {
  hidden: {
    x: 10,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
    transition: {delay: 0.25},
  },

  hover: {
    scale: 1.1,
  },

  click: {
    backgroundColor: "#FFFFFF",
    color: "#000",
    transition: {
      duration: 0.1,
    },
  },
};

const imageVariants = {
  visible: {
    x: 0,
    opacity: 1,
  },

  hover: {
    x: 0,
    opacity: 1,
  },
};

const iconVariants = {
  hidden: {
    x: -10,
    opacity: 0,
  },

  visible: {
    x: 0,
    opacity: 1,
  },

  hover: {
    scale: 1.3,
  },
};

const ProductBox = ({ product, index, productIndex, setProductIndex }) => {
  return (
    <div
      className="relative col-span-6 md:col-span-4 lg:col-span-3 w-full bg-white"
      onClick={() => handleClick()}
      onMouseOver={() => setProductIndex(index)}
      onMouseLeave={() => setProductIndex("")}
    >
      <div>
        <motion.img
          variants={imageVariants}
          initial="visible"
          animate={index === productIndex ? "hover" : ""}
          exit="visible"
          className="relative lg:min-h-[440px] w-full object-cover overflow-hidden cursor-pointer rounded-[10px]  "
          src={product.thumbnail}
          alt=""
        />

        <AnimatePresence>
          {/* {index === productIndex ? ( */}
            <div className="absolute flex flex-col gap-[3px] top-[5%] right-[5%]">
              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                whileTap="click"
                whileHover="hover"
                exit="hidden"
                className="text-secondary bg-primary w-[40px] h-[40px] rounded-full cursor-pointer"
              >
                <CiHeart className="inline-block" />
              </motion.button>

              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                whileTap="click"
                whileHover="hover"
                exit="hidden"
                className="text-secondary bg-primary w-[40px] h-[40px] rounded-full cursor-pointer"
              >
                <IoEyeOutline className="inline-block" />
              </motion.button>

              <motion.button
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                whileTap="click"
                whileHover="hover"
                exit="hidden"
                className="text-secondary bg-primary w-[40px] h-[40px] rounded-full cursor-pointer"
              >
                <CiShoppingCart className="inline-block" />
              </motion.button>

              
            </div>
          {/* ) : (
            ""
          )} */}
        </AnimatePresence>
        {/* <img
          className="relative lg:min-h-[440px] w-full object-cover overflow-hidden cursor-pointer rounded-[10px] "
          src={product.thumbnail}
          alt=""
        /> */}
        <div className="absolute flex flex-col gap-[3px] top-[5%] left-[7%]">
          {product.isSoldOut && (
            <p className="w-fit text-[13px] bg-senary  text-primary px-[10px] py-[4px] rounded-full">
              Sold Out
            </p>
          )}
          {product.salePercent && (
            <p className="w-fit text-[13px] bg-quaternary text-primary px-[10px] py-[4px] rounded-full">
              {product.salePercent}
            </p>
          )}
          {product.isPreOrder && (
            <p className="w-fit text-[13px] bg-tertiary  text-primary px-[10px] py-[4px] rounded-full">
              Pre-Order
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center mt-[16px] ">
        <p className="font-normal">{product.title}</p>
        <div className="rating rating-sm rating-half mt-[8px]">
          {/* <input type="radio" name="rating-10" className="rating-hidden" /> */}
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-secondary"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-secondary"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-secondary"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-secondary"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-secondary"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-secondary"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-secondary"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-secondary"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-1 bg-secondary"
          />
          <input
            type="radio"
            name="rating-10"
            className="mask mask-star-2 mask-half-2 bg-secondary"
          />
        </div>

        {product.salePrice ? (
          <div className="flex gap-1">
            <p className="text-[14px] text-quaternary font-medium mt-[8px]">
              ${product.salePrice.toFixed(2)}
            </p>
            <p className="text-[14px] text-senary font-medium mt-[8px] line-through">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ) : (
          <p className="text-[14px] font-medium mt-[8px]">
            ${product.price.toFixed(2)}
          </p>
        )}
        <div className="flex gap-[5px] mt-[8px]">
          {product.colors.map((color, index) => {
            return (
              <div
                key={index}
                className={`w-6 h-6 rounded-full`}
                style={{
                  backgroundColor: color,
                  border: `1px solid rgba(184, 184, 184, 0.8)`,
                }}
              ></div>
            );
          })}
        </div>
      </div>

      {/* <p>{product.description}</p> */}
    </div>
  );
};

export default ProductBox;
