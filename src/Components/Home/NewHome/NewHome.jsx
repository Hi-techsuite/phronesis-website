import React from "react";
import "./newhome.css";
import Marquee from "react-fast-marquee";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper/modules";
import services from "../../Static";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const NewHome = () => {
  return (
    <div className="NewHome_div">
      <section className="NewHome_div_section1">
        <div className="container2">
          <div className="NewHome_div_section1_area">
            <div className="NewHome_div_section1_area_1">
              <div className="NewHome_div_section1_area_1_title">
                Masters of Consistency and{" "}
                <span className="NewHome_div_section1_area_1_title_span">
                  Quality.
                </span>{" "}
              </div>
              <div className="NewHome_div_section1_area_1_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
                vero quo ea optio eum temporibus perspiciatis atque incidunt
                nulla itaque nesciunt iure laborum quidem. Voluptatibus?
              </div>
              <div className="NewHome_div_section1_area_1_para_btns">
                <button className="NewHome_div_section1_area_1_para_btn">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/img/carousel-2.jpeg"
          alt=""
          className="NewHome_div_section1_bg"
        />
        <div className="dark_bg"></div>
      </section>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <div className="feautured_in_div" id="clients">
        {/* <div className="feautured_in_div_title">Clients</div> */}
        <div className="container2">
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
      </div>
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      <section className="about_new_section">
        <div className="container2">
          <div className="about_new_section_area">
            <div className="about_new_section_area_head">
              About{" "}
              <span className="about_new_section_area_head_span">Company</span>{" "}
            </div>
            <div className="about_new_section_area_body">
              <div className="about_new_section_area_body_1">
                <img
                  src="/img/nigeria_dotted_map.svg"
                  alt=""
                  className="about_new_section_area_body_1_img"
                />
              </div>
              <div className="about_new_section_area_body_2">
                <div className="about_new_section_area_body_2_cont1">
                  <div className="about_new_section_area_body_2_cont1_div1">
                    <div className="about_new_section_area_body_2_cont1_div1_txt1">
                      Produces Power
                    </div>
                    <div className="about_new_section_area_body_2_cont1_div1_txt">
                      110+
                    </div>
                  </div>
                  <div className="about_new_section_area_body_2_cont1_div1">
                    <div className="about_new_section_area_body_2_cont1_div1_txt1">
                      Produces Power
                    </div>
                    <div className="about_new_section_area_body_2_cont1_div1_txt">
                      110+
                    </div>
                  </div>
                  <div className="about_new_section_area_body_2_cont1_div1">
                    <div className="about_new_section_area_body_2_cont1_div1_txt1">
                      Produces Power
                    </div>
                    <div className="about_new_section_area_body_2_cont1_div1_txt">
                      110+
                    </div>
                  </div>
                </div>
                <div className="about_new_section_area_body_2_cont2">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                  accusantium dolorem laboriosam facilis nisi amet, laudantium
                  voluptate nihil atque temporibus aperiam aut ut excepturi
                  itaque fugit ipsa pariatur deserunt. Rem?
                </div>
                <button className="getstarted_button">Get Started</button>
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
      <section className="why_choose_new_section">
        <div className="container2">
          <div className="why_choose_new_section_area">
            <div className="why_choose_new_section_area_1">
              <div className="why_choose_new_section_area_1_title">
                Why Choose <br />{" "}
                <span className="why_choose_new_section_area_1_title_span">
                  Phronesis
                </span>{" "}
              </div>
              <div className="why_choose_new_section_area_1_para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                tempora. Fugiat necessitatibus quia quidem sequi, incidunt hic
                veniam dolorem illo corporis saepe adipisci distinctio. At,
                aperiam! Fugit ullam corporis dolorum fugiat quam sint libero
                eaque odit, officiis voluptate rerum asperiores.
              </div>
            </div>
            <div className="why_choose_new_section_area_2">
              <div className="why_choose_new_section_area_2_cont1">
                <div className="why_choose_new_section_area_2_cont1_div1">
                  <MiscellaneousServicesIcon className="why_choose_new_section_area_2_cont1_div1_icon" />
                  <div className="why_choose_new_section_area_2_cont1_div1_body">
                    <div className="why_choose_new_section_area_2_cont1_div1_body_title">
                      Empowering Our Services
                    </div>
                    <div className="why_choose_new_section_area_2_cont1_div1_body_para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus eum suscipit deserunt dignissimos officiis
                      incidunt.
                    </div>
                  </div>
                </div>
                <div className="why_choose_new_section_area_2_cont1_div1">
                  <MiscellaneousServicesIcon className="why_choose_new_section_area_2_cont1_div1_icon" />
                  <div className="why_choose_new_section_area_2_cont1_div1_body">
                    <div className="why_choose_new_section_area_2_cont1_div1_body_title">
                      Empowering Our Services
                    </div>
                    <div className="why_choose_new_section_area_2_cont1_div1_body_para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus eum suscipit deserunt dignissimos officiis
                      incidunt.
                    </div>
                  </div>
                </div>
                <div className="why_choose_new_section_area_2_cont1_div1">
                  <MiscellaneousServicesIcon className="why_choose_new_section_area_2_cont1_div1_icon" />
                  <div className="why_choose_new_section_area_2_cont1_div1_body">
                    <div className="why_choose_new_section_area_2_cont1_div1_body_title">
                      Empowering Our Services
                    </div>
                    <div className="why_choose_new_section_area_2_cont1_div1_body_para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Repellendus eum suscipit deserunt dignissimos officiis
                      incidunt.
                    </div>
                  </div>
                </div>
              </div>
              <div className="why_choose_new_section_area_2_cont2">
                <img
                  src="/img/service_img.jpeg"
                  alt=""
                  className="why_choose_new_section_area_2_cont2_img"
                />
                <div className="why_choose_new_section_area_2_cont2_para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  repellat consequatur consequuntur non veniam, sint aliquid
                  quae aspernatur facilis! Saepe nisi illo praesentium nesciunt
                  minima voluptate distinctio nemo adipisci facilis?...
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
      <section className="clients_new_section">
        <div className="container2">
          <div className="clients_new_section_area">
            <div className="clients_new_section_area_heading">
              Services We{" "}
              <span className="clients_new_section_area_heading_span">
                Offer.
              </span>
            </div>
            <div className="clients_new_section_area_body">
              <Swiper
                slidesPerView={4}
                spaceBetween={10}
                effect={"fade"}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  // 768: {
                  //   slidesPerView: 2,
                  //   spaceBetween: 40,
                  // },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1400: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  1800: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                }}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                navigation={true}
                // onSlideChange={handleSlideChange}
                className="home_div_section1_swiper"
              >
                {services.map((data) => (
                  <SwiperSlide className="dash_home_products_swiper_slide">
                    <a
                      href={`/services/${data.id}/${data.title}`}
                      className="home_div_section3_area_2_cont1"
                      id={data.id}
                    >
                      <div className="home_div_section3_area_2_cont1_img_div">
                        <img
                          src={data.img}
                          alt=""
                          className="home_div_section3_area_2_cont1_img"
                        />
                      </div>
                      <div className="home_div_section3_area_2_cont1_body">
                        <div className="home_div_section3_area_2_cont1_title">
                          {data.title2}
                        </div>
                        <div className="home_div_section3_area_2_cont1_para">
                          {data.paragraph}
                        </div>
                        <a
                          href={`/services/${data.id}/${data.title}`}
                          className="home_div_section3_area_2_cont1_btn_link"
                        >
                          <div className="home_div_section3_area_2_cont1_btn">
                            <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                            Read more
                          </div>
                        </a>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      <section className="gallery_new_section">
        <div className="container2">
          <div className="gallery_new_section_area">
            <div className="gallery_new_section_area_title">
              Amazing{" "}
              <span className="gallery_new_section_area_title_span">
                Gallery
              </span>{" "}
            </div>
            <div className="gallery_new_section_area_body">
              <div className="gallery_new_section_area_body_cont1">
                <img
                  src="/img/dummy_gallery_img2.webp"
                  alt=""
                  className="gallery_new_section_area_body_cont1_img"
                />
              </div>
              <div className="gallery_new_section_area_body_cont2">
                <img
                  src="/img/dummy_gallery_img5.jpeg"
                  alt=""
                  className="gallery_new_section_area_body_cont2_img1"
                />
                <img
                  src="/img/dummy_gallery_img3.webp"
                  alt=""
                  className="gallery_new_section_area_body_cont2_img2"
                />
              </div>
              <div className="gallery_new_section_area_body_cont3">
                <img
                  src="/img/dummy_gallery_img4.jpeg"
                  alt=""
                  className="gallery_new_section_area_body_cont3_img1"
                />
                <img
                  src="/img/dummy_gallery_img1.jpeg"
                  alt=""
                  className="gallery_new_section_area_body_cont3_img2"
                />
              </div>
            </div>
            <button className="gallery_new_section_area_btn">View More</button>
          </div>
        </div>
      </section>
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      <section className="last_new_section">
        <div className="container">
          <div className="last_new_section_area">
            <div className="last_new_section_area_title">
              Looking for leading oil services for your company?
            </div>
            <div className="contact_numb_div">
              <span className="contact_numb_div_span">+234 803 814 9307</span>
              <button className="contact_numb_div_btn">Book a call</button>
            </div>
          </div>
        </div>
        <img
          src="/img/last_sec_img.jpeg"
          alt=""
          className="last_new_section_bg"
        />
      </section>
    </div>
  );
};

export default NewHome;
