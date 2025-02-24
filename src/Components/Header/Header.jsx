import React, { useState } from "react";
import "../../Styles/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TopHeader from "./TopHeader";
import { services_data } from "./ServicesStatic";
import ServicesDropdown from "./ServiceDropdown";
import Dropdown from "./Dropdown/dropdown";

const Header = ({ darkMode, togglemakeDark }) => {
  const [tradeDrop, setTradeDrop] = useState(false);
  const [headerMenu, setHeaderMenu] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
  const handleMouseEnter = (index) => {
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };
  return (
    <div
      // className={fixed ? "header_div_fixed" : "header_div"}
      className="header_div_fixed "
      onMouseLeave={CloseTradeDrop}
    >
      <TopHeader fixed={true} />

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

              <div class="dropdown relative inline-flex [--trigger:hover] rtl:[--placement:bottom-end]">
                <a
                  id="dropdown-hover"
                  type="button"
                  class="dropdown-toggle flex gap-2 "
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  About Us
                  <span class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                </a>
                <ul
                  class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-hover"
                >
                  <li>
                    <a class="dropdown-item" href="/who-we-are">
                      Who we Are
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/certification">
                      Award and Certification
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/knowledge-bank">
                      Knowledge Bank
                    </a>
                  </li>
                </ul>
              </div>
              <div class="dropdown relative inline-flex [--trigger:hover] rtl:[--placement:bottom-end]">
                <a
                  id="dropdown-hover"
                  type="button"
                  class="dropdown-toggle flex gap-2 "
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  Services
                  <span class="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                </a>
                <ul
                  class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdown-hover"
                >
                  {services_data
                    .filter((aa) => aa.type === "main-list")
                    .map((data, index) => {
                      return (
                        <li
                          class="dropdown relative [--offset:15] max-sm:[--placement:bottom-start] [--placement:right-start]"
                          key={index}
                        >
                          {services_data.filter(
                            (ab) => ab.belongsTo === data.name
                          ).length > 0 ? (
                            <>
                              <button
                                id="second-level"
                                class="dropdown-toggle py-4 dropdown-item justify-between"
                                aria-haspopup="menu"
                                aria-expanded="false"
                                aria-label="Dropdown"
                              >
                                {data.name}
                                <span class="icon-[tabler--chevron-right] size-4 rtl:rotate-180"></span>
                              </button>

                              <ul
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="second-level"
                                class="dropdown-menu dropdown-open:opacity-100 hidden min-w-60"
                              >
                                {services_data
                                  .filter((ac) => ac.belongsTo === data.name)
                                  .map((ad, index) => {
                                    return (
                                      <li
                                        key={index}
                                        class="dropdown-item py-4"
                                      >
                                        <a href={`/services${ad.url}`}>
                                          {ad.name}
                                        </a>
                                      </li>
                                    );
                                  })}
                              </ul>
                            </>
                          ) : (
                            <a class="dropdown-item" href="/who-we-are">
                              {data.name}
                            </a>
                          )}
                        </li>
                      );
                    })}
                </ul>
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
                class=" rounded px-5 py-2.5 overflow-hidden group bg-transparent relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Home</span>
              </a>
              <a
                href="/services/4/Inspection%20Services"
                onMouseOver={CloseTradeDrop}
                class=" rounded px-5 py-2.5 overflow-hidden group bg-transparent relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Services</span>
              </a>
              <a
                href="/who-we-are"
                onMouseOver={CloseTradeDrop}
                class=" rounded px-5 py-2.5 overflow-hidden group bg-transparent relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">About Us</span>
              </a>
              <a
                href="/gallery"
                onMouseOver={CloseTradeDrop}
                class=" rounded px-5 py-2.5 overflow-hidden group bg-transparent relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
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
