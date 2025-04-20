import React, { useState } from "react";
import "../../Styles/header.css";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TopHeader from "./TopHeader";
import { services_data } from "./ServicesStatic";

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
      // className={fixed && "header_div_fixed" : "header_div"}
      className={fixed && "header_div_fixed"}
      // className="header_div_fixed "
      onMouseLeave={CloseTradeDrop}
    >
      <TopHeader fixed={true} />

      <div className="container2 ">
        <div className=" py-5 flex items-center  justify-between  gap-3">
          <a href="/" className="">
            <img src="/logo.webp" alt="" className=" w-2/4 md:w-40" />
          </a>

          <ul className="nav-list ">
            <li>
              <a href="/" className="">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="">
                About Us
              </a>

              <ul className="sub-menu">
                <li>
                  <a href="/who-we-are" className="dropdown-item ">
                    Who we Are
                  </a>
                </li>
                <li>
                  <a href="/certification" className="dropdown-item text-xs">
                    Award and Certification
                  </a>
                </li>
                <li>
                  <a href="/knowledge-bank" className="dropdown-item text-xs">
                    Knowledge Bank
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#" className="">
                Services
              </a>

              <ul className="sub-menu">
                {services_data
                  .filter((service) => service.type === "main-list")
                  .map((data, index) => {
                    const isSubAvailable = services_data.filter(
                      (ab) => ab.belongsTo === data.name
                    ).length;
                    return (
                      <li key={index} className="flex px-10 ">
                        <a
                          href={`/services${data.url}`}
                          className="flex items-center justify-center"
                        >
                          {data.name}
                        </a>
                        {isSubAvailable ? (
                          <span className="icon-[tabler--chevron-right] dropdown-open:rotate-180 size-4">
                            &nbsp;
                          </span>
                        ) : (
                          <> </>
                        )}

                        {services_data.filter(
                          (ab) => ab.belongsTo === data.name
                        ).length > 0 && (
                          <ul className="sub-menu">
                            {services_data
                              .filter((ac) => ac.belongsTo === data.name)
                              .map((subData, index) => {
                                const isSubAvailable = services_data.filter(
                                  (ad) => ad.belongsTo === subData.name
                                ).length;
                                return (
                                  <li
                                    key={index}
                                    className="dropdown-item flex my-5"
                                  >
                                    <a
                                      href={`/services${subData.url}`}
                                      className="text-xs flex justify-between items-center"
                                    >
                                      {subData.name}
                                    </a>

                                    {isSubAvailable ? (
                                      <span className="icon-[tabler--chevron-right] dropdown-open:rotate-180 size-4">
                                        &nbsp;
                                      </span>
                                    ) : (
                                      <> </>
                                    )}

                                    {/* {isSubAvailable && (
                                      <span className="icon-[tabler--chevron-right] dropdown-open:rotate-180 size-4">
                                        &nbsp;
                                      </span>
                                    )} */}
                                    {services_data.filter(
                                      (ae) => ae.belongsTo === subData.name
                                    ).length > 0 && (
                                      <ul className="sub-menu">
                                        {services_data
                                          .filter(
                                            (af) =>
                                              af.belongsTo === subData.name
                                          )
                                          .map((subData2, index) => {
                                            const isSubAvailable =
                                              services_data.filter(
                                                (ag) =>
                                                  ag.belongsTo === subData2.name
                                              ).length;
                                            return (
                                              <li
                                                key={index}
                                                className="dropdown-item flex my-5"
                                              >
                                                <a
                                                  href={`/services${subData2.url}`}
                                                  className=""
                                                >
                                                  {subData2.name}

                                                  {isSubAvailable ? (
                                                    <span className="icon-[tabler--chevron-right] dropdown-open:rotate-180 size-4">
                                                      &nbsp;
                                                    </span>
                                                  ) : (
                                                    <> </>
                                                  )}
                                                </a>
                                              </li>
                                            );
                                          })}
                                      </ul>
                                    )}
                                  </li>
                                );
                              })}
                          </ul>
                        )}
                      </li>
                    );
                  })}
              </ul>
            </li>
            <li>
              <a href="/gallery" className="">
                Gallery
              </a>
            </li>
            <li>
              <a href="/contact-us" className="">
                Contact Us
              </a>
            </li>
          </ul>

          {/* <div className="flex  gap-3 md:w-40 w-80 ">
            <div className="">
              <img src="/new_img/iso9001.png" alt="" />
            </div>
          </div> */}

          <div className="flex flex-row gap-2 justify-center items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-10"
              >
                <path
                  fill="#00ad0f"
                  d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
                ></path>
              </svg>
            </div>
            <div className="xl:text-sm text-xs">
              <p className="font-bold">ISO 9001</p>
              <p className="font-bold uppercase"> Certification </p>
            </div>
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
                href="/services/inspection-services"
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
                href="/contact-us"
                onMouseOver={CloseTradeDrop}
                class=" rounded px-5 py-2.5 overflow-hidden group bg-transparent relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-black hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Contact Us</span>
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
