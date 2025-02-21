import React, { useState } from "react";
import "../../Styles/header.css";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SettingsIcon from "@mui/icons-material/Settings";
import services from "../Static";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { transition, transition2 } from "../../utils/transition";
import { NavLink } from "react-router-dom";
import TopHeader from "./TopHeader";
import Sample from "./sampl";

const Header = ({ darkMode, togglemakeDark }) => {
  const [tradeDrop, setTradeDrop] = useState(false);
  const [headerMenu, setHeaderMenu] = useState(false);
  const [fixed, setFixed] = useState(false);

  const OpenTradeDrop = () => {
    setTradeDrop(true);
  };
  const CloseTradeDrop = () => {
    setTradeDrop(false);
  };
  const ToggleHeaderMenu = () => {
    setHeaderMenu(!headerMenu);
  };

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div
      // className={fixed ? "header_div_fixed" : "header_div"}
      // className={fixed ? "header_div_fixed" : "header_div"}
      className="header_div_fixed "
      onMouseLeave={CloseTradeDrop}
    >
      <TopHeader fixed={true} />

      {/* <Sample /> */}

      <div className="container2 ">
        <div className=" py-5 flex items-center  justify-between  gap-3">
          <a href="/" className="">
            <img src="/logo.webp" alt="" className=" w-2/4 md:w-40" />
          </a>

          <div className="flex  gap-3 md:w-40 w-80 ">
            <div className="">
              <img src="/new_img/iso9001.png" alt="" />
            </div>
          </div>

          <div className="header_div_area_cont3 ">
            <div className="header_div_area_cont2 px-6">
              <a
                href="/"
                className="header_div_area_cont2_link1"
                onMouseOver={CloseTradeDrop}
              >
                Home
              </a>

              <div
                className="header_div_area_cont2_link1"
                onMouseOver={OpenTradeDrop}
                // onMouseLeave={CloseTradeDrop}
              >
                Services <ExpandMoreIcon />
                {tradeDrop ? (
                  <motion.div
                    variants={fadeIn("down")}
                    transition={transition2()}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="header_div_area_cont2_link1_drop_div"
                    onMouseLeave={CloseTradeDrop}
                  >
                    {services.map((data) => (
                      <a
                        href={`/services/${data.id}/${data.title}`}
                        className="header_div_area_cont2_link1_drop_div_cont1"
                      >
                        <div className="header_div_area_cont2_link1_drop_div_cont1_div">
                          <SettingsIcon className="header_div_area_cont2_link1_drop_div_cont1_icon" />{" "}
                          {data.title}
                        </div>
                        {/* <NorthEastIcon className="header_div_area_cont2_link1_drop_div_cont1_arrow" /> */}
                      </a>
                    ))}
                  </motion.div>
                ) : null}
              </div>

              <div className="relative group   hover:bg-[#2b9768] py-2 px-[15px] rounded-full ">
                <button className="flex items-center justify-between w-full py-2 px-3 font-medium text-black border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                  About Us
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div className="absolute z-10   group-hover:block w-[200px] hover:grid grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700 hidden">
                  <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/who-we-are"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                        >
                          Who we Are
                        </a>
                      </li>
                      <li>
                        <a
                          href="/certification"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                        >
                          Award and Certification
                        </a>
                      </li>
                      <li>
                        <a
                          href="/knowledge-bank"
                          className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                        >
                          Knowledge Bank
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <a
                href="/gallery"
                className="header_div_area_cont2_link1"
                // target="_blank"
                onMouseOver={CloseTradeDrop}
              >
                Gallery
              </a>
            </div>
            <MenuIcon
              className="mobile_menu_icon2"
              onClick={ToggleHeaderMenu}
              onMouseOver={CloseTradeDrop}
            />
            <a
              href="/get-quote"
              class="hidden  box-border relative z-30 md:inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-green-500 ease focus:outline-none"
            >
              <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
              <span class="relative z-20 flex items-center text-sm">
                <svg
                  class="relative w-5 h-5 mr-2 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                Request Quote
              </span>
            </a>
            {/* <a href={"/#contact-us"}>
              <button className=" flex-nowrap"></button>
            </a> */}
          </div>
        </div>
      </div>
      {headerMenu ? (
        // <div className="headerMenuDiv">
        //   <div className="headerMenuDiv_cont">
        //     <CloseIcon
        //       className="header_div_area_cont3_icon2"
        //       onClick={ToggleHeaderMenu}
        //     />
        //     {services.map((data) => (
        //       <a
        //         href={`/services/${data.id}/${data.title}`}
        //         className="headerMenuDiv_cont_1"
        //       >
        //         {" "}
        //         <div className="header_div_area_cont2_link1_drop_div_cont1_div">
        //           <SettingsIcon className="header_div_area_cont2_link1_drop_div_cont1_icon" />{" "}
        //           <span className="headerMenuDiv_cont_1_txt">{data.title}</span>
        //         </div>
        //         <span className="headerMenuDiv_cont_1_icon">
        //           {" "}
        //           <KeyboardArrowRightIcon className="headerMenuDiv_cont_1_icon_icon" />{" "}
        //         </span>
        //       </a>
        //     ))}
        //     <a href="/#contact-us" style={{ width: "100%" }}>
        //       <button className="headerMenuDiv_cont_1_btn">Contact Us</button>
        //     </a>
        //   </div>
        // </div>
        <div className="headerMenuDiv">
          <div className="headerMenuDiv_cont">
            <CloseIcon
              className="header_div_area_cont3_icon2"
              onClick={ToggleHeaderMenu}
            />
            <div className="headerMenuDiv_cont  flex flex-col gap-10 h-full ">
              <a
                href="/"
                onMouseOver={CloseTradeDrop}
                class="relative rounded px-5 py-2.5 overflow-hidden group bg-transparent relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Home</span>
              </a>
              <a
                href="/services/4/Inspection%20Services"
                onMouseOver={CloseTradeDrop}
                class="relative rounded px-5 py-2.5 overflow-hidden group bg-transparent relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Services</span>
              </a>
              <a
                href="/who-we-are"
                onMouseOver={CloseTradeDrop}
                class="relative rounded px-5 py-2.5 overflow-hidden group bg-transparent relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">About Us</span>
              </a>
              <a
                href="/gallery"
                onMouseOver={CloseTradeDrop}
                class="relative rounded px-5 py-2.5 overflow-hidden group bg-transparent relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Gallery</span>
              </a>

              <a
                onClick={() => setHeaderMenu(false)}
                href="/get-quote"
                class="box-border relative z-30 md:inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-green-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-green-500 ease focus:outline-none"
              >
                <span class="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span class="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                <span class="relative z-20 flex items-center text-sm">
                  <svg
                    class="relative w-5 h-5 mr-2 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  Request Quote
                </span>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
