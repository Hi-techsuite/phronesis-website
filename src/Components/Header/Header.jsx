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

      <div className="container2">
        <div className=" flex items-center  justify-between  gap-3">
          <a href="/" className="">
            <img src="/logo.webp" alt="" className=" w-2/4 md:w-40" />
          </a>

          <div className="flex  gap-3 ">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-green-400 w-10 "
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                ></path>
              </svg>
            </div>
            <div className="flex  flex-col text-sm">
              <span className="font-extrabold">ISO 9001</span>
              CERTIFIED
            </div>
          </div>

          <div className="header_div_area_cont3">
            <div className="header_div_area_cont2">
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

              {/* <a
                href="/scope?=new-page"
                className="header_div_area_cont2_link1"
                onMouseOver={CloseTradeDrop}
              >
                Scope
              </a> */}

              {/* <a
                href="/about"
                className="header_div_area_cont2_link1"
                onMouseOver={CloseTradeDrop}
              >
                About Us
              </a> */}
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
            <a href={"/#contact-us"}>
              <button className="header_div_area_cont3_btn_contact">
                Contact Us
              </button>
            </a>
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
                className="header_div_area_cont2_link1"
                onMouseOver={CloseTradeDrop}
              >
                Home
              </a>
              <a
                href="/services/4/Inspection%20Services"
                className="header_div_area_cont2_link1"
                onMouseOver={CloseTradeDrop}
              >
                Services
              </a>

              <a
                href="/about"
                className="header_div_area_cont2_link1"
                onMouseOver={CloseTradeDrop}
              >
                About Us
              </a>
              <a
                href="/gallery"
                className="header_div_area_cont2_link1"
                // target="_blank"
                onMouseOver={CloseTradeDrop}
              >
                Gallery
              </a>
            </div>
            <a
              onClick={() => setHeaderMenu(false)}
              href="/#contact-us"
              className="w-full"
            >
              <button className="headerMenuDiv_cont_1_btn">Contact Us</button>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
