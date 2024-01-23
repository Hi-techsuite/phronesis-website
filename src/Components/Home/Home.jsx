import React, { useEffect, useState } from "react";
import "../../Styles/home.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import services from "../Static";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
const Home = () => {
  const [activeSwipeIndex, setSwipeActiveIndex] = useState(0);

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
  const handleSlideChange = (swiper) => {
    console.log("Swiper slide index:", swiper.activeIndex);
    setSwipeActiveIndex(swiper.activeIndex);
    // Example condition based on the active index
    if (swiper.activeIndex === 1) {
      console.log("Swiper slide is equal to 1");
    }
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
          onSlideChange={handleSlideChange}
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
                  Phronesis
                </div>
                {activeSwipeIndex === 0 ? (
                  <div className="home_div_section1_area_div_area1_txt2">
                    ENVIROMENTAL AND WASTE MANAGEMENT
                  </div>
                ) : null}
                {activeSwipeIndex === 1 ? (
                  <div className="home_div_section1_area_div_area1_txt2">
                    Enhanced spent water base mud treatment
                  </div>
                ) : null}
                {activeSwipeIndex === 2 ? (
                  <div className="home_div_section1_area_div_area1_txt2">
                    WASTE EQUIPMENT LEASING, SALE AND SUPPLY
                  </div>
                ) : null}
                {activeSwipeIndex === 0 ? (
                  <a
                    href="/services/1/ENVIROMENTAL%20AND%20WASTE%20MANAGEMENT"
                    className="home_div_section1_area_div_area1_button_div"
                  >
                    Explore{" "}
                    <div className="home_div_section1_area_div_area1_button_div_icon_div">
                      <ArrowForwardIcon className="home_div_section1_area_div_area1_button_div_icon" />
                    </div>
                  </a>
                ) : null}
                {activeSwipeIndex === 1 ? (
                  <a
                    href="/services/2/Enhanced%20spent%20water%20base%20mud%20treatment"
                    className="home_div_section1_area_div_area1_button_div"
                  >
                    Explore{" "}
                    <div className="home_div_section1_area_div_area1_button_div_icon_div">
                      <ArrowForwardIcon className="home_div_section1_area_div_area1_button_div_icon" />
                    </div>
                  </a>
                ) : null}
                {activeSwipeIndex === 2 ? (
                  <a
                    href="/services/3/WASTE%20EQUIPMENT%20LEASING,%20SALE%20AND%20SUPPLY"
                    className="home_div_section1_area_div_area1_button_div"
                  >
                    Explore{" "}
                    <div className="home_div_section1_area_div_area1_button_div_icon_div">
                      <ArrowForwardIcon className="home_div_section1_area_div_area1_button_div_icon" />
                    </div>
                  </a>
                ) : null}
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
      <div className="feautured_in_div" id="clients">
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
              <a href="/about" className="home_div_section3_area_2_cont1_btn">
                <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                Read more
              </a>
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
                {services.map((data) => (
                  <div className="home_div_section3_area_2_cont1" id={data.id}>
                    <div className="home_div_section3_area_2_cont1_img_div">
                      <img
                        src="/img/climate_img.webp"
                        alt=""
                        className="home_div_section3_area_2_cont1_img"
                      />
                    </div>
                    <div className="home_div_section3_area_2_cont1_title">
                      {data.title}
                    </div>
                    <a href={`/services/${data.id}/${data.title}`}>
                      <div className="home_div_section3_area_2_cont1_btn">
                        <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                        Read more
                      </div>
                    </a>
                  </div>
                ))}
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
              <a
                href="/gallery"
                className="home_div_section4_area_cont1_btn"
                style={{ color: "#000" }}
              >
                {" "}
                <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                See more
              </a>
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
