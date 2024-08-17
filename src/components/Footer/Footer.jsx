import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../../images/logo/logo.png";

import instaIcon from "../../images/socialIcons/insta.png";
import tiktokIcon from "../../images/socialIcons/tiktok.png";
import ytbIcon from "../../images/socialIcons/youtube.png";
import xIcon from "../../images/socialIcons/x.png";
import fbIcon from "../../images/socialIcons/facebook.png";

import pay1 from "../../images/payment/bg.png";
import pay2 from "../../images/payment/bg-1.png";
import pay3 from "../../images/payment/bg-2.png";
import pay4 from "../../images/payment/bg-3.png";
import pay5 from "../../images/payment/bg-4.png";
import pay6 from "../../images/payment/bg-5.png";
import pay7 from "../../images/payment/bg-6.png";
import Accordian from "./Accordian";

const socialIcons = [instaIcon, tiktokIcon, ytbIcon, xIcon, fbIcon];
const paymentIcons = [pay1, pay2, pay3, pay4, pay5, pay6, pay7];
const hotCataTitles = [
  "Special Offers",
  "Performance",
  "T-shirts",
  "Underwear",
  "Top Brands",
  "Online Exclusive",
];

const customerServiceTitle = [
  "Privacy Policy",
  "Refund Policy",
  "Shipping & Return",
  "Term & Conditions",
  "Advanced Search",
  "Theme FAQs",
  "Store Locations",
];
const Footer = () => {
  const Year = new Date().getFullYear();

  return (
    <footer className="w-full bg-primary text-secondary mt-[100px] mb-[200px] lg:mb-[35px]">
      <div className=" overflow-hidden border-t-2 ">
        <div className="grid grid-cols-12 lg:gap-10 px-[20px] lg:px-[255px] mt-[100px]">
          {/* Col 1 */}
          <div className="col-span-12 xl:col-span-4 flex flex-col">
            {/* Logo */}
            <img className="w-[92px] h-[20px]" src={logo} alt="" />

            {/* Infomation    */}
            <div className="mt-[30px]">
              <p className="text-octonary">
                268 St, South New York/NY 98944, United States
              </p>
              <p className="text-octonary">+222-1800-2628</p>
              <p className="text-octonary">blueskytechcompany@gmail.com</p>
            </div>

            {/*Social icon */}
            <div className="flex gap-[10px] mt-[25px]">
              {socialIcons.map((icon, index) => {
                return (
                  <div className="flex justify-center items-center w-[36px] h-[36px] border border-secondary rounded-full ">
                    <img className="scale-[90%] " src={icon} alt="" />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block col-span-12 md:col-span-6 xl:col-span-2">
            <li className="list-none text-[14px] font-semibold text-secondary uppercase">
              Hot Categories
            </li>
            {hotCataTitles.map((title, index) => {
              return (
                <li className="text-senary mt-[25px] list-none">{title}</li>
              );
            })}
          </div>

          <div className="hidden md:block col-span-12 md:col-span-6 xl:col-span-2">
            <li className=" list-none text-[14px] font-semibold text-secondary  uppercase">
              Customer Service
            </li>
            {customerServiceTitle.map((title, index) => {
              return (
                <li className="text-senary mt-[25px] list-none">{title}</li>
              );
            })}
          </div>
          
          {/* Accordian footer */}
          <Accordian />

          <div className="col-span-12 xl:col-span-4 flex flex-col">
            <p className="overflow-hidden font-semibold text-[14px] text-secondary uppercase">
              Sign Up to Newsletter
            </p>

            <p className="text-[16px] text-senary my-4 break-words">
              Enter your email address to get $10 off your first order and free
              shipping. Updates information on Sales and Offers.
            </p>

            <div className="flex gap-[10px]">
              <input
                className="h-[50px] basis-3/5 text-senary text-[14px] rounded-[30px] border border-senary pl-[20px]"
                type="text"
                placeholder="Enter your email..."
              />
              <button className="h-[50px] basis-2/5 text-[12px] text-primary font-semibold  bg-secondary rounded-[30px]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Below footer section */}
      <div className="border-t-2 mx-[20px] lg:mx-[255px] mt-[80px]">
        <div className="grid grid-cols-4 xl:grid-cols-12 lg:gap-10 my-[35px] justify-items-center xl:justify-items-start">
          <div className="col-span-4 flex gap-[20px]">
            <p className="text-senary">English</p>
            <p className="text-senary">United Stated (USD $)</p>
          </div>

          <div className="col-span-4 flex gap-[20px] mt-[10px] lg:mt-[0px]">
            <p className="text-senary">
              © 2023 Umino Store. All Rights Reserved.
            </p>
          </div>

          <div className="col-span-4 flex gap-[5px] mt-[15px] lg:mt-[0px] xl:justify-self-end">
            {paymentIcons.map((icon, index) => {
              return (
                <img
                  className="w-[35px] object-cover p-[2px] border border-senary rounded-[3px]"
                  src={icon}
                  alt=""
                />
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
