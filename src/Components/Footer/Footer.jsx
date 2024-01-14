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
                src="/phronesis_logo.svg"
                alt=""
                className="header_div_area_cont1_img"
              />
            </div>
            <div className="footer_div_area_1_cont2">
              <div className="footer_div_area_1_cont2_title">Contact</div>
              <div className="footer_div_area_1_cont2_body">
                <div className="footer_div_area_1_cont2_body_div1">
                  KM 15 Onne/Eleme Road, Off Eleme Junction, Port Harcourt,
                  Rivers State
                </div>
                <div className="footer_div_area_1_cont2_body_div1">
                  +234803 814 9307, 805 323 9036, 847 670 93
                </div>
                <div className="footer_div_area_1_cont2_body_div1">
                  info@phronesisoilandgas.com
                </div>
              </div>
            </div>
          </div>
          <hr className="footer_hr" />
          <div className="footer_lastDiv">
            © {currentYear} Phronesis Oil Co.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
