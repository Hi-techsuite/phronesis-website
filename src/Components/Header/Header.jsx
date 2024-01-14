import React, { useState } from "react";
import "../../Styles/header.css";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = ({ darkMode, togglemakeDark }) => {
  const [tradeDrop, setTradeDrop] = useState(false);
  const [headerMenu, setHeaderMenu] = useState(false);

  const ToggleTradeDrop = () => {
    setTradeDrop(!tradeDrop);
  };
  const ToggleHeaderMenu = () => {
    setHeaderMenu(!headerMenu);
  };
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
              <a href="#" className="header_div_area_cont2_link1">
                Home
              </a>
              <a href="#" className="header_div_area_cont2_link1">
                Services
              </a>
              <a href="#" className="header_div_area_cont2_link1">
                About Us
              </a>
              <a
                href="https://docs.egox.io"
                className="header_div_area_cont2_link1"
                target="_blank"
              >
                Clients
              </a>
              <a
                href="https://docs.egox.io"
                className="header_div_area_cont2_link1"
                target="_blank"
              >
                Gallery
              </a>
            </div>
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
            <a href="#" className="headerMenuDiv_cont_1">
              {" "}
              <span className="headerMenuDiv_cont_1_txt">Trade</span>
              <span className="headerMenuDiv_cont_1_icon">
                {" "}
                <KeyboardArrowRightIcon className="headerMenuDiv_cont_1_icon_icon" />{" "}
              </span>
            </a>

            <a href="#" className="headerMenuDiv_cont_1">
              {" "}
              <span className="headerMenuDiv_cont_1_txt">Earn</span>
              <span className="headerMenuDiv_cont_1_icon">
                {" "}
                <KeyboardArrowRightIcon className="headerMenuDiv_cont_1_icon_icon" />{" "}
              </span>
            </a>
            <a href="#" className="headerMenuDiv_cont_1">
              {" "}
              <span className="headerMenuDiv_cont_1_txt">Borrow</span>
              <span className="headerMenuDiv_cont_1_icon">
                {" "}
                <KeyboardArrowRightIcon className="headerMenuDiv_cont_1_icon_icon" />{" "}
              </span>
            </a>
            <a
              href="https://docs.egox.io"
              target="_blank"
              className="headerMenuDiv_cont_1"
            >
              {" "}
              <span className="headerMenuDiv_cont_1_txt">Docs</span>
              <span className="headerMenuDiv_cont_1_icon">
                {" "}
                <KeyboardArrowRightIcon className="headerMenuDiv_cont_1_icon_icon" />{" "}
              </span>
            </a>
            <div className="headerMenuDiv_cont_1">
              {" "}
              <span className="headerMenuDiv_cont_1_txt">UI-mode</span>
              <span className="headerMenuDiv_cont_1_icon_btn">
                {darkMode ? (
                  <Brightness7Icon
                    className="header_div_area_cont3_div2_icon"
                    onClick={togglemakeDark}
                  />
                ) : (
                  <NightsStayIcon
                    className="header_div_area_cont3_div2_icon"
                    onClick={togglemakeDark}
                  />
                )}
              </span>
            </div>
            <div className="headerMenuDiv_cont_1">
              {" "}
              <span className="headerMenuDiv_cont_1_txt">Language</span>
              <span className="headerMenuDiv_cont_1_icon_btn">
                <img
                  src="/img/language_select_img1.svg"
                  alt=""
                  className="header_div_area_cont3_img"
                />
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Header;