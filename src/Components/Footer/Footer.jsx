import React, { useEffect, useState } from "react";
import "../../Styles/footer.css";
const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Update the year every second (you can adjust the interval as needed)

    // Clear the interval when the component unmounts    sss
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="footer_div">
      <div className="container2">
        <div className="footer_div_area">
          <div className="footer_div_area_1">
            <div className="footer_div_area_1_cont1">
              {" "}
              <img
                src="/logo.webp"
                alt=""
                className="header_div_area_cont1_img"
              />
            </div>
            <div className="footer_div_area_1_cont2">
              <div className="footer_div_area_1_cont2_title">Contact</div>
              <div className="footer_div_area_1_cont2_body">
                <div className="footer_div_area_1_cont2_body_div1">
                  Lakowe School Gate, Ibeju-Lekki Lagos, Nigeria.
                </div>
                <div className="footer_div_area_1_cont2_body_div1">
                  +234-816-163-7797 ,+234-811-262-7647
                </div>
                <div className="footer_div_area_1_cont2_body_div1">
                  consult@scaftechservices.com
                </div>
              </div>
            </div>
          </div>
          <hr className="footer_hr" />
          <div className="footer_lastDiv">
            © {currentYear} Scaftech Nigeria.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
