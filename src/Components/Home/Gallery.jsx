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
    setImgPop(e.currentTarget.id);
    setImgContent(`/img/gallery_imgs/${e.currentTarget.id}.jpg`);
    console.log("====================================");
    console.log(e.currentTarget.id);
    console.log("====================================");
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
      <section className="gallery_section">
        <div className="container2">
          <div className="gallery_section_area">
            <motion.div
              variants={fadeIn("Up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="home_div_section4_area_cont2"
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr1"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/img/gallery_imgs/glr1.jpg"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr1" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt">
                      Click image to expand
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2">
                <div
                  id="glr2"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr2.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr2" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
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
                    src="/img/gallery_imgs/glr3.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr3" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
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
              className="home_div_section4_area_cont2"
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr4"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/img/gallery_imgs/glr4.jpg"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr4" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt">
                      Click image to expand
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2">
                <div
                  id="glr5"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr5.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr5" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
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
                    src="/img/gallery_imgs/glr6.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr6" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
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
              className="home_div_section4_area_cont2"
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr7"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/img/gallery_imgs/glr7.jpg"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr7" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt">
                      Click image to expand
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2">
                <div
                  id="glr8"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr8.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr8" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  id="glr9"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr9.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr9" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
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
              className="home_div_section4_area_cont2"
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr10"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/img/gallery_imgs/glr10.jpg"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr10" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt">
                      Click image to expand
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2">
                <div
                  id="glr11"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr11.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr11" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  id="glr12"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr12.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr12" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
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
              className="home_div_section4_area_cont2"
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr13"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/img/gallery_imgs/glr13.jpg"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr13" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt">
                      Click image to expand
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2">
                <div
                  id="glr14"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr14.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr14" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  id="glr15"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr15.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr15" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
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
              className="home_div_section4_area_cont2"
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr16"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/img/gallery_imgs/glr16.jpg"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr16" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt">
                      Click image to expand
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2">
                <div
                  id="glr17"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr17.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr17" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  id="glr18"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr18.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr18" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
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
              className="home_div_section4_area_cont2"
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr19"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/img/gallery_imgs/glr19.jpg"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr19" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt">
                      Click image to expand
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2">
                <div
                  id="glr20"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr20.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr20" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  id="glr21"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr21.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr21" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
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
              className="home_div_section4_area_cont2"
            >
              <div
                className="home_div_section4_area_cont2_cont1"
                id="glr22"
                onClick={toggleImgPop}
                onMouseOver={OpenExpandDiv}
                onMouseLeave={CloseExpandDiv}
              >
                <img
                  src="/img/gallery_imgs/glr22.jpg"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
                {expandDiv === "glr22" ? (
                  <div className="Expandiv_div">
                    <div className="Expandiv_div_txt">
                      Click image to expand
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="home_div_section4_area_cont2_cont2">
                <div
                  id="glr23"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr23.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr23" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
                    </div>
                  ) : null}
                </div>
                <div
                  id="glr11"
                  className="home_div_section4_area_cont2_cont2_div"
                  onClick={toggleImgPop}
                  onMouseOver={OpenExpandDiv}
                  onMouseLeave={CloseExpandDiv}
                >
                  <img
                    src="/img/gallery_imgs/glr11.jpg"
                    alt=""
                    className="home_div_section4_area_cont2_cont2_img"
                  />
                  {expandDiv === "glr11" ? (
                    <div className="Expandiv_div">
                      <div className="Expandiv_div_txt">
                        Click image to expand
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.div>
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
