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
        <div className="h-full lg:px-20 md:px-6 px-[5px] ">
          <div className="NewHome_div_section1_area w-full">
            <div className="w-full flex flex-col justify-center mt-32 ">
              <div className=" lg:text-[102px] md:text-6xl text-5xl lg:w-[90%] w-full  mx-auto font-semibold mb-2 text-white">
                Masters of Consistency and{" "}
                <span className="NewHome_div_section1_area_1_title_span">
                  Quality.
                </span>{" "}
              </div>
              <div className="text-xl leading-[1.5] text-white lg:w-[84%] w-auto px-2 m-auto mb-12 ">
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
      <section className="about_new_section lg:py-24 py-7">
        <div className="container2 ">
          <div className="about_new_section_area">
            <div className=" text-clamp font-semibold text-white mb-6 lg:text-start text-center">
              About{" "}
              <span className="about_new_section_area_head_span">Company</span>{" "}
            </div>
            <div className=" flex  justify-between lg:flex-row flex-col lg:gap-0 gap-4 items-center">
              <div className="about_new_section_area_body_1">
                <img
                  src="/img/nigeria_dotted_map.svg"
                  alt=""
                  className="about_new_section_area_body_1_img"
                />
              </div>
              <div className="w-full flex flex-col lg:ml-20 ml-0 lg:text-start text-center lg:items-start items-center">
                <div className="flex lg:justify-between lg:mb-[3em] mb-[1em] lg:mt-0 mt-4 lg:flex-row md:flex-row flex-col items-center justify-center md:gap-16 gap-8  ">
                  <div className="about_new_section_area_body_2_cont1_div1 ">
                    <div className="about_new_section_area_body_2_cont1_div1_txt1 ">
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
                <div className=" text-clamp2 leading-[1.5] mb-8 text-white ">
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
            <div className="flex lg:flex-row flex-col gap-2  justify-between mb-8 ">
              <div className=" w-full font-semibold text-black text-clamp leading-[1]">
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
            <div className="flex lg:flex-row flex-col">
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
        <div className="lg:px-16 px-4">
          <div className="clients_new_section_area">
            <div className="text-clamp font-semibold text-white">
              Services We{" "}
              <span className="clients_new_section_area_heading_span">
                Offer.
              </span>
            </div>
            <div className="clients_new_section_area_body">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                effect={"fade"}
                pagination={{
                  dynamicBullets: true,
                  clickable: true,
                }}
                breakpoints={{
                  500: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  // 768: {
                  //   slidesPerView: 2,
                  //   spaceBetween: 40,
                  // },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2,
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
            <div className=" w-full text-clamp text-black mb-4 leading-[1]">
              Amazing{" "}
              <span className="gallery_new_section_area_title_span">
                Gallery
              </span>{" "}
            </div>
            <div className="flex lg:flex-row flex-col lg:gap-0 gap-4  lg:items-stretch items-center">
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
            <div className="text-clamp3 font-semibold leading-[1.1] mb-10">
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
