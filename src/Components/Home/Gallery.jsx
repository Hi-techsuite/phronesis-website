import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { transition } from "../../utils/transition";
import { fadeIn } from "../../utils/variants";
const Gallery = () => {
  const [imgPop, setImgPop] = useState("");
  const [imgContent, setImgContent] = useState("");
  const [expandDiv, setExpandDiv] = useState("");

  const textArray = [
    "glr1",
    "glr2",
    "glr3",
    "glr4",
    "glr5",
    "glr6",
    "glr7",
    "glr8",
    "glr9",
    "glr10",
    "glr11",
    "glr12",
    "glr13",
    "glr14",
    "glr15",
    "glr16",
    "glr17",
    "glr18",
    "glr19",
    "glr20",
    "glr21",
    "glr22",
    "glr23",
  ];

  const toggleImgPop = (e) => {
    // setImgPop(e.currentTarget.id);
    // setImgContent(`/img/gallery_imgs/${e.currentTarget.id}.jpg`);
    // console.log("====================================");
    // console.log(e.currentTarget.id);
    // console.log("====================================");
  };
  const closeImgPop = () => {
    setImgPop("");
    setImgContent("");
  };
  const OpenExpandDiv = (e) => {
    setExpandDiv(e.currentTarget.id);
  };
  const CloseExpandDiv = () => {
    setExpandDiv("");
  };

  return (
    <div className="gallery_div">
      <section className=" px-0 relative py-32 bg-[#1D2723]">
        <div className="container2">
          <div className="gallery_section_area ">
            <motion.div
              variants={fadeIn("Up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="home_div_section4_area_cont2 gap-2 "
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr1"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/new_img/3rd-party-inspection.webp"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr1" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt"></div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2 gap-2">
                <div
                  id="glr2"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/new_img/equipment-leasing.webp"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr2" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt"></div>
                    </div>
                  ) : null}
                </div>
                <div
                  id="glr3"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/new_img/equipment-maintenance.webp"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr3" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt"></div>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
            <br />
            <br />
            <motion.div
              variants={fadeIn("Up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="home_div_section4_area_cont2 gap-2 "
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr4"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/new_img/highrise-cleaning.webp"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr4" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt"></div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2 gap-2">
                <div
                  id="glr5"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/new_img/safety-support.png"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr5" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt"></div>
                    </div>
                  ) : null}
                </div>
                <div
                  id="glr6"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/new_img/scaffolding.webp"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr6" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt"></div>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
            <br />
            <br />
            <motion.div
              variants={fadeIn("Up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="home_div_section4_area_cont2 gap-2 "
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr7"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/new_img/tank-calibration.webp"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr7" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt"></div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2 gap-2">
                <div
                  id="glr8"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/new_img/welding-and-fabrication.png"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr8" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt"></div>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
            <br />
            <br />

            <br />
            <br />
          </div>
        </div>
      </section>
      {textArray.includes(imgPop) ? (
        <div className="img_popUp" onClick={closeImgPop}>
          {/* <div className="img_popUp_close_div"></div> */}
          <img src={imgContent} alt="" className="img_popUp_img" />
        </div>
      ) : null}
    </div>
  );
};

export default Gallery;
