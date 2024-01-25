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
    <div className="header_div" onMouseLeave={CloseTradeDrop}>
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
                Services <ExpandMoreIcon />{" "}
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
                target="_blank"
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
            <a href="/#contact">
              <button className="header_div_area_cont3_btn_contact">
                Contact Us
              </button>
            </a>
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
                <div className="header_div_area_cont2_link1_drop_div_cont1_div">
                  <SettingsIcon className="header_div_area_cont2_link1_drop_div_cont1_icon" />{" "}
                  <span className="headerMenuDiv_cont_1_txt">{data.title}</span>
                </div>
                <span className="headerMenuDiv_cont_1_icon">
                  {" "}
                  <KeyboardArrowRightIcon className="headerMenuDiv_cont_1_icon_icon" />{" "}
                </span>
              </a>
            ))}
            <a href="/#contact" style={{ width: "100%" }}>
              <button className="headerMenuDiv_cont_1_btn">Contact Us</button>
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
