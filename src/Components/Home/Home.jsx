import React, { useEffect, useState } from "react";
import "../../Styles/home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home_div">
      <section className="home_div_section1">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          effect={"fade"}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="home_div_section1_swiper"
        >
          <SwiperSlide className="dash_home_products_swiper_slide">
            <div className="dash_home_products_swiper_slide_img_div">
              <img
                src="/img/hero_img_1.webp"
                alt=""
                className="dash_home_products_swiper_slide_img
              "
              />
              <div className="home_div_section1_fade_bg_img"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="dash_home_products_swiper_slide">
            <div className="dash_home_products_swiper_slide_img_div">
              <img
                src="/img/hero_img_2.webp"
                alt=""
                className="dash_home_products_swiper_slide_img
              "
              />
              <div className="home_div_section1_fade_bg_img"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="dash_home_products_swiper_slide">
            <div className="dash_home_products_swiper_slide_img_div">
              <img
                src="/img/hero_img_3.webp"
                alt=""
                className="dash_home_products_swiper_slide_img
              "
              />
              <div className="home_div_section1_fade_bg_img"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="home_div_section1_area">
          <div className="container2">
            <div className="home_div_section1_area_div">
              <div className="home_div_section1_area_div_area1">
                <div className="home_div_section1_area_div_area1_txt1">
                  ANSTON MARTIN PARTNERSHIP
                </div>
                <div className="home_div_section1_area_div_area1_txt2">
                  Protecting some of the favourite pitstops of Saudi Arabia’s
                  migrating birds
                </div>
                <div className="home_div_section1_area_div_area1_button_div">
                  Explore How{" "}
                  <div className="home_div_section1_area_div_area1_button_div_icon_div">
                    <ArrowForwardIcon className="home_div_section1_area_div_area1_button_div_icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <div className="feautured_in_div">
        <div className="feautured_in_div_title">Featured In</div>
        <Marquee
          speed={80}
          gradient={false}
          autoFill={true}
          direction="left"
          // delay={0}
        >
          <img
            src="/img/clientsImg/shell_logo.png"
            alt=""
            className="feautured_in_div_img"
          />
          <img
            src="/img/clientsImg/aos_logo.jpeg"
            alt=""
            className="feautured_in_div_img"
          />
          <img
            src="/img/clientsImg/dts_logo.png"
            alt=""
            className="feautured_in_div_img"
          />
          <img
            src="/img/clientsImg/exon_logo.png"
            alt=""
            className="feautured_in_div_img"
          />
          <img
            src="/img/clientsImg/horatio_logo.jpeg"
            alt=""
            className="feautured_in_div_img"
          />
          <img
            src="/img/clientsImg/lng_logo.jpeg"
            alt=""
            className="feautured_in_div_img"
          />
          <img
            src="/img/clientsImg/oando_logo.png"
            alt=""
            className="feautured_in_div_img"
          />
          <img
            src="/img/clientsImg/seplat_logo.png"
            alt=""
            className="feautured_in_div_img"
          />
          <img
            src="/img/clientsImg/tecon_logo.jpeg"
            alt=""
            className="feautured_in_div_img"
          />
          <img
            src="/img/clientsImg/wasco_logo.jpeg"
            alt=""
            className="feautured_in_div_img"
          />
        </Marquee>
      </div>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <section className="home_div_section2">
        <div className="container2">
          <div className="home_div_section2_area">
            <div className="home_div_section2_area_1">
              <img
                src="/img/about_img.webp"
                alt=""
                className="home_div_section2_area_1_img"
              />
            </div>
            <div className="home_div_section2_area_2">
              <div className="home_div_section2_area_2_title">About Us</div>
              <div className="home_div_section2_area_2_para">
                PHRONESIS OIL & GAS TEK LIMITED is a full service hazardous and
                non–hazardous waste transportation, management, disposal,
                complete oil and gas drilling services solution Company
                recognized for its technical expertise, commitment to safety,
                and dedication to the protection of its clients’ long-term
                liability.
                <br />
                <br />
                With comprehensive experience and skilled environmental
                professionals, engineers, and managers, we provide high quality
                service teamed with a network of nationally and internationally
                recogniSed waste management and engineering facilities, to offer
                efficient, cost-effective, and environmentally sound solutions
                to hazardous waste management and oil and gas drilling problems.
              </div>
              <div className="home_div_section3_area_2_cont1_btn">
                <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                Read more
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <section className="home_div_section3">
        <div className="container2">
          <div className="home_div_section3_area">
            <div className="home_div_section3_area_1">
              <div className="home_div_section3_area_1_title">Our Services</div>
              <div className="home_div_section3_area_1_para">
                As our business operations expand, so do the initiatives we
                undertake to ensure we leave an enduring legacy of protecting
                the planet we all inhabit.
              </div>
            </div>

            <div className="home_div_section3_area_2">
              <Slider {...settings} className="services_slider">
                <div className="home_div_section3_area_2_cont1">
                  <img
                    src="/img/climate_img.webp"
                    alt=""
                    className="home_div_section3_area_2_cont1_img"
                  />
                  <div className="home_div_section3_area_2_cont1_title">
                    Climate change
                  </div>
                  <div className="home_div_section3_area_2_cont1_para">
                    Reducing emissions to help address climate change.
                  </div>
                  <div className="home_div_section3_area_2_cont1_btn">
                    <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                    Read more
                  </div>
                </div>
                <div className="home_div_section3_area_2_cont1">
                  <img
                    src="/img/climate_img.webp"
                    alt=""
                    className="home_div_section3_area_2_cont1_img"
                  />
                  <div className="home_div_section3_area_2_cont1_title">
                    Climate change
                  </div>
                  <div className="home_div_section3_area_2_cont1_para">
                    Reducing emissions to help address climate change.
                  </div>
                  <div className="home_div_section3_area_2_cont1_btn">
                    <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                    Read more
                  </div>
                </div>
                <div className="home_div_section3_area_2_cont1">
                  <img
                    src="/img/climate_img.webp"
                    alt=""
                    className="home_div_section3_area_2_cont1_img"
                  />
                  <div className="home_div_section3_area_2_cont1_title">
                    Climate change
                  </div>
                  <div className="home_div_section3_area_2_cont1_para">
                    Reducing emissions to help address climate change.
                  </div>
                  <div className="home_div_section3_area_2_cont1_btn">
                    <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                    Read more
                  </div>
                </div>
                <div className="home_div_section3_area_2_cont1">
                  <img
                    src="/img/climate_img.webp"
                    alt=""
                    className="home_div_section3_area_2_cont1_img"
                  />
                  <div className="home_div_section3_area_2_cont1_title">
                    Climate change
                  </div>
                  <div className="home_div_section3_area_2_cont1_para">
                    Reducing emissions to help address climate change.
                  </div>
                  <div className="home_div_section3_area_2_cont1_btn">
                    <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                    Read more
                  </div>
                </div>
                <div className="home_div_section3_area_2_cont1">
                  <img
                    src="/img/climate_img.webp"
                    alt=""
                    className="home_div_section3_area_2_cont1_img"
                  />
                  <div className="home_div_section3_area_2_cont1_title">
                    Climate change
                  </div>
                  <div className="home_div_section3_area_2_cont1_para">
                    Reducing emissions to help address climate change.
                  </div>
                  <div className="home_div_section3_area_2_cont1_btn">
                    <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                    Read more
                  </div>
                </div>
                <div className="home_div_section3_area_2_cont1">
                  <img
                    src="/img/climate_img.webp"
                    alt=""
                    className="home_div_section3_area_2_cont1_img"
                  />
                  <div className="home_div_section3_area_2_cont1_title">
                    Climate change
                  </div>
                  <div className="home_div_section3_area_2_cont1_para">
                    Reducing emissions to help address climate change.
                  </div>
                  <div className="home_div_section3_area_2_cont1_btn">
                    <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                    Read more
                  </div>
                </div>
                <div className="home_div_section3_area_2_cont1">
                  <img
                    src="/img/climate_img.webp"
                    alt=""
                    className="home_div_section3_area_2_cont1_img"
                  />
                  <div className="home_div_section3_area_2_cont1_title">
                    Climate change
                  </div>
                  <div className="home_div_section3_area_2_cont1_para">
                    Reducing emissions to help address climate change.
                  </div>
                  <div className="home_div_section3_area_2_cont1_btn">
                    <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                    Read more
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <section className="home_div_section4">
        <div className="container2">
          <div className="home_div_section4_area">
            <div className="home_div_section4_area_cont1">
              Gallery{" "}
              <div className="home_div_section4_area_cont1_btn">
                {" "}
                <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                See more
              </div>
            </div>
            <div className="home_div_section4_area_cont2">
              <div className="home_div_section4_area_cont2_cont1">
                <img
                  src="/img/gallery_img2.jpeg"
                  alt=""
                  className="home_div_section4_area_cont2_cont1_img"
                />
              </div>
              <div className="home_div_section4_area_cont2_cont2">
                <img
                  src="/img/gallery_img1.jpeg"
                  alt=""
                  className="home_div_section4_area_cont2_cont2_img"
                />
                <img
                  src="/img/gallery_img3.jpeg"
                  alt=""
                  className="home_div_section4_area_cont2_cont2_img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <section
        className="home_div_section5"
        style={{ backgroundImage: "url(/img/contact_dummy_img.webp)" }}
      >
        <div className="home_div_section1_fade_bg_img2"></div>
        <div className="container2">
          <div className="home_div_section5_area">
            <div className="home_div_section5_area_1">
              <div className="home_div_section5_area_1_div1">
                Do you have any questions?
              </div>
              <div className="home_div_section5_area_1_div2">
                Feel free to use the form to get in touch with us or visit our
                social media channels.
              </div>
            </div>
            <div className="home_div_section5_area_2">
              <div className="home_div_section5_area_2_input_div">
                <div className="home_div_section5_area_2_input_div_title">
                  Name*
                </div>
                <input
                  type="text"
                  placeholder="Joh Doe"
                  className="home_div_section5_area_2_input_div_input"
                />
              </div>
              <div className="home_div_section5_area_2_input_div">
                <div className="home_div_section5_area_2_input_div_title">
                  Email*
                </div>
                <input
                  type="email"
                  placeholder="@gmail.com"
                  className="home_div_section5_area_2_input_div_input"
                />
              </div>
              <div className="home_div_section5_area_2_input_div">
                <div className="home_div_section5_area_2_input_div_title">
                  Phone Number*
                </div>
                <input
                  type="number"
                  placeholder="+000 00"
                  className="home_div_section5_area_2_input_div_input"
                />
              </div>
              <div className="home_div_section5_area_2_input_div">
                <div className="home_div_section5_area_2_input_div_title">
                  Message*
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="home_div_section5_area_2_input_div_txt_area"
                ></textarea>
              </div>
              <button className="home_div_section5_area_2_btn">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
