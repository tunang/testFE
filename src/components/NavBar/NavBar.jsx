import { useState } from "react";

import logo from "../../images/logo/logo.png";

import { IoMdMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  const [cartTotal, setCartTotal] = useState(2);
  const [favTotal, setFavTotal] = useState(2);
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const navbarTitles = [
    {
      items: [
        {
          label: "Home",
          icon: <BsChevronDown />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Shop",
          icon: <BsChevronDown />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Products",
          icon: <BsChevronDown />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Pages",
          icon: <BsChevronDown />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Blogs",
          icon: <BsChevronDown />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Sale",
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Buy Umino!",
          active: false,
          action: () => {
            navigate("/");
          },
        },
      ],
    },
  ];

  const navbarIconsDeskTop = [
    {
      items: [
        {
          label: "Search",
          icon: <CiSearch />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Profile",
          icon: <GoPerson />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Clock",
          icon: <CiClock2 />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Heart",
          icon: <CiHeart />,
          active: false,
          total: favTotal,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Cart",
          icon: <CiShoppingCart />,
          active: false,
          total: cartTotal,
          action: () => {
            navigate("/");
          },
        },
      ],
    },
  ];

  const navbarIconsMobile = [
    {
      items: [
        {
          label: "Search",
          icon: <IoIosSearch />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Cart",
          icon: <CiShoppingCart />,
          active: false,
          total: cartTotal,
          action: () => {
            navigate("/");
          },
        },
      ],
    },
  ];

  return (
    <div className="fixed grid grid-cols-12 top-0 h-[70px] w-full px-[18px] lg:px-[30px] bg-primary items-center shadow-md z-50">
      {/* Hamburger menu icon */}
      <p className="lg:hidden col-span-4">
        <IoMdMenu className="w-[24px] h-[24px]" />
      </p>

      {/* Logo */}
      <div className="col-span-4 lg:col-span-2 justify-self-center lg:justify-self-start">
        <img
          className=" w-[92px] h-[20px]"
          src={logo}
          alt=""
        />
      </div>

      {/* Navbar titles */}
      <div className=" lg:col-span-8 flex justify-center">
        {navbarTitles.map((navbarTitle, index) => {
          return (
            <div className="hidden lg:flex" key={index}>
              {navbarTitle.items.map((item) => {
                return (
                  <div
                    onClick={item.action}
                    className="flex items-center cursor-pointer mr-[30px] "
                  >
                    <p className="text-secondary font-[500]">{item.label}</p>
                    <p className="text-secondary ml-[5px]">{item?.icon}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Navbar icons desktop*/}
      <div className="col-span-2 flex justify-end lg:justify-self-end">
        {navbarIconsDeskTop.map((navbarIcon, index) => {
          return (
            <div className="hidden lg:flex" key={index}>
              {navbarIcon.items.map((item) => {
                return (
                  <div
                    onClick={item.action}
                    className="relative flex items-center cursor-pointer mr-[20px] last-of-type:mr-0"
                  >
                    <p className=" text-secondary text-[20px]">{item?.icon}</p>
                    {item.total && (
                      <p className="absolute w-[18px] h-[18px] leading-[18px] text-center text-[10px] top-[-8px] right-[-8px] text-primary bg-quaternary rounded-full">
                        {item.total}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      {/* Navbar icons mobile*/}
      </div>
        {navbarIconsMobile.map((navbarIcon, index) => {
          return (
            <div className="lg:hidden flex justify-self-end" key={index}>
              {navbarIcon.items.map((item) => {
                return (
                  <div
                    onClick={item.action}
                    className="relative flex items-center cursor-pointer mr-[20px] last-of-type:mr-0"
                  >
                    <p className=" text-secondary text-[20px]">{item?.icon}</p>
                    {item.total && (
                      <p className="absolute w-[18px] h-[18px] leading-[18px] text-center text-[10px] top-[-8px] right-[-8px] text-primary bg-quaternary rounded-full">
                        {item.total}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default NavBar;
