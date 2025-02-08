import React, { useEffect, useState } from "react";
import "./servicePage.css";
import "../NewHome/newhome.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import services from "../../Static";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { transition } from "../../../utils/transition";
import { fadeIn, reveal } from "../../../utils/variants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Pagination, EffectFade, Autoplay, Navigation } from "swiper/modules";

const ServicePage = () => {
  const [payload, setPayload] = useState(null);
  const { id, title } = useParams();

  console.log("====================================");
  console.log(id);
  console.log(title);
  console.log("====================================");
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

  const pageid = id; // Replace this with your actual pageid

  useEffect(() => {
    // Find the object in the services array with matching id
    const foundObject = services.find(
      (service) => service.id === String(pageid)
    );

    // If an object is found, setPayload with that object
    if (foundObject) {
      setPayload(foundObject);
    } else {
      // If no matching object is found, you can handle it accordingly
      console.error(`No object found with id ${pageid}`);
    }
  }, [pageid]);
  return (
    <>
      {" "}
      {!payload ? null : (
        <div className="servicePageDiv ">
          <section className=" relative py-[6em] px-0 bg-[#1D2723]">
            <div className="container2">
              <div className="ServicePage_area">
                <div className="dash_home_products_swiper_slide_img_divb">
                  <img
                    src={payload?.img}
                    alt=""
                    className="dash_home_products_swiper_slide_imgb"
                  />
                  <div className="home_div_section1_fade_bg_img"></div>
                </div>
                <div className="home_div_section1_areab">
                  <div className="home_div_section1_area_div">
                    <div className="home_div_section1_area_div_area1">
                      <div className="home_div_section1_area_div_area1_txt1">
                        SCAFTECH Service
                      </div>

                      <motion.div
                        variants={fadeIn("Up")}
                        transition={transition()}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="home_div_section1_area_div_area1_txt2b "
                      >
                        {payload.title}
                      </motion.div>

                      <div className="home_div_section1_area_div_area1_button_div">
                        <div className="home_div_section1_area_div_area1_button_div_icon_div">
                          <ArrowForwardIcon className="home_div_section1_area_div_area1_button_div_icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" relative py-[6em] px-0 bg-[#1D2723] text-white">
            <div className="container2">
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="text-white"
              >
                {payload.body}
              </motion.div>
            </div>
          </section>
          <section className=" relative py-[6em] px-0 bg-[#1D2723] text-white">
            <div className="container2">
              <div className="home_div_section3_area">
                <div className="home_div_section3_area_1">
                  <div className="home_div_section3_area_1_title">
                    Other Services
                  </div>
                  <div className=" w-6/12 font-light text-[18px] text-white">
                    As our business operations expand, so do the initiatives we
                    undertake to ensure we leave an enduring legacy of
                    protecting the planet we all inhabit.
                  </div>
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
                      50: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },

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
        </div>
      )}
    </>
  );
};

export default ServicePage;
