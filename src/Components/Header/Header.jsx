import React, { useState } from "react";
import "../../Styles/header.css";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import services from "../Static";
const Header = ({ darkMode, togglemakeDark }) => {
  const [tradeDrop, setTradeDrop] = useState(false);
  const [headerMenu, setHeaderMenu] = useState(false);

  const OpenTradeDrop = () => {
    setTradeDrop(true);
  };
  const CloseTradeDrop = () => {
    setTradeDrop(false);
  };
  const ToggleHeaderMenu = () => {
    setHeaderMenu(!headerMenu);
  };

  const serviceTitle = [
    {
      title: "ENVIRONMENTAL AND WASTE MANAGEMENT",
    },
    {
      title: "ENHANCED SPENT TREATMENT",
    },
    {
      title: " WASTE EQUIPMENT LEASING, SALE AND SUPPLY",
    },
    {
      title: " WASTE TRANSPORTATION",
    },
    {
      title: " EQUIPMENT LEASING PROCUREMENT",
    },
    {
      title: "OIL & GAS DRILLING",
    },
    {
      title: "FIELD MAINTENANCE",
    },
    {
      title: "RENTAL OF DRILL CUTTINGS SKIPS",
    },
    {
      title: "ENVIRONMENTAL CONSULTANCY",
    },
    {
      title: "CIVIL & MECHANICAL ENGINEERING",
    },
    {
      title: "ENGINEERING OVERVIEW",
    },
    {
      title: "CONSTRUCTION & CIVIL WORKS",
    },
    {
      title: "MECHANICAL FABRICATION",
    },
  ];

  return (
    <div className="header_div">
      <div className="container2">
        <div className="header_div_area">
          <a href="/" className="header_div_area_cont1">
            <img
              src="/phronesis_logo_light.svg"
              alt=""
              className="header_div_area_cont1_img"
            />
          </a>

          <div className="header_div_area_cont3">
            <div className="header_div_area_cont2">
              <a href="/" className="header_div_area_cont2_link1">
                Home
              </a>
              <div
                className="header_div_area_cont2_link1"
                onMouseOver={OpenTradeDrop}
                // onMouseLeave={CloseTradeDrop}
              >
                Services{" "}
                {tradeDrop ? (
                  <div
                    className="header_div_area_cont2_link1_drop_div"
                    onMouseLeave={CloseTradeDrop}
                  >
                    {services.map((data) => (
                      <a
                        href={`/services/${data.id}/${data.title}`}
                        className="header_div_area_cont2_link1_drop_div_cont1"
                      >
                        {data.title}
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
              <a href="/about" className="header_div_area_cont2_link1">
                About Us
              </a>
              <a
                href="/gallery"
                className="header_div_area_cont2_link1"
                target="_blank"
              >
                Gallery
              </a>
            </div>
            <MenuIcon className="mobile_menu_icon" onClick={ToggleHeaderMenu} />
            <button className="header_div_area_cont3_btn_contact">
              Contact Us
            </button>
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
            {services.map((data) => (
              <a
                href={`/services/${data.id}/${data.title}`}
                className="headerMenuDiv_cont_1"
              >
                {" "}
                <span className="headerMenuDiv_cont_1_txt">{data.title}</span>
                <span className="headerMenuDiv_cont_1_icon">
                  {" "}
                  <KeyboardArrowRightIcon className="headerMenuDiv_cont_1_icon_icon" />{" "}
                </span>
              </a>
            ))}

            <button className="headerMenuDiv_cont_1_btn">Contact Us</button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
