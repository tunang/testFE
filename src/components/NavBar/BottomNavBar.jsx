import { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronDown } from "react-icons/bs";
import { RiHome5Line } from "react-icons/ri";
import { PiStorefrontLight } from "react-icons/pi";
import { BsHouse } from "react-icons/bs";


const BottomNavBar = () => {
  const [cartTotal, setCartTotal] = useState(2);
  const [favTotal, setFavTotal] = useState(2);
  const navbarIconsMobile = [
    {
      items: [
        {
          label: "Home",
          icon: <BsHouse />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Shop",
          icon: <PiStorefrontLight />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Account",
          icon: <CiClock2 />,
          active: false,
          action: () => {
            navigate("/");
          },
        },
        {
          label: "Wishlist",
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

  return (
    <div className="flex lg:hidden fixed justify-between bottom-0 w-full h-[75px] bg-primary items-center shadow-md z-50 px-[22px]">
      {navbarIconsMobile.map((navbarIcon, index) => {
        return (
          <div className="flex justify-around w-full" key={index}>
            {navbarIcon.items.map((item) => {
              return (
                <div
                  onClick={item.action}
                  className="relative flex flex-col items-center cursor-pointer mr-[20px] last-of-type:mr-0"
                >
                  <div className="relative">
                    {item.total && (
                      <p className="absolute w-[18px] h-[18px] leading-[18px] text-center text-[10px] top-[-8px] right-[-8px] text-primary bg-quaternary rounded-full">
                        {item.total}
                      </p>
                    )}
                    <p className=" text-secondary text-[20px]">{item?.icon}</p>
                  </div>
                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavBar;
