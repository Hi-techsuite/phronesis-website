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
import ContactForm from "../../ContactUs";
import GetInTouch from "../../ContactUs/GetInTouch";
import Testimonies from "../../Testimonies";
import { useNavigate } from "react-router-dom";
import SpliderHero from "../../Hero/SpliderHero";

const NewHome = () => {
  const navigate = useNavigate();
  return (
    <div className="NewHome_div">
      <SpliderHero />

      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}
      {/* ==================== */}

      <section className="bg-[#17233a] min-h-[300px] ">
        <div className=" flex items-center flex-col py-10  px-5 gap-5  xl:font-black font-bold text-white ">
          <p className="xl:text-5xl text-2xl ">Welcome to Scaftech</p>
          <p className="text-sm font-light md:text-lg md:w-3/5">
            We serve a diverse range of industries, including Oil & Gas, Marine,
            and Construction. Leveraging the expertise of our multi-skilled
            workforce, we deliver comprehensive, integrated solutions designed
            to address complex asset integrity challenges. Our tailored services
            ensure the most effective and efficient outcomes for our clients.
          </p>
        </div>
      </section>

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
              src="/sponsors/sponsor-2.webp"
              alt=""
              className="feautured_in_div_img"
            />
            <img
              src="/sponsors/sponsor-3.webp"
              alt=""
              className="feautured_in_div_img"
            />
            <img
              src="/sponsors/sponsor-4.webp"
              alt=""
              className="feautured_in_div_img"
            />
            <img
              src="/sponsors/sponsor-6.webp"
              alt=""
              className="feautured_in_div_img"
            />
            <img
              src="/sponsors/sponsor-7.webp"
              alt=""
              className="feautured_in_div_img"
            />
            <img
              src="/sponsors/sponsor-8.webp"
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
            <div className=" text-clamp font-semibold text-white mb-6 lg:text-start justify-center flex">
              {`Who We `}
              <span className="about_new_section_area_head_span">
                {" "}
                &nbsp;{`Are`}
              </span>{" "}
            </div>
            <div className=" flex  justify-between lg:flex-row flex-col lg:gap-0 gap-4 items-center">
              <div className="about_new_section_area_body_1">
                <img
                  src="/new_img/nigeria_dotted_map.svg"
                  alt=""
                  className="about_new_section_area_body_1_img"
                />
              </div>
              <div className="w-full flex flex-col lg:ml-20 ml-0 lg:text-start text-center lg:items-start items-center">
                {/* <div className="flex lg:justify-between lg:mb-[3em] mb-[1em] lg:mt-0 mt-4 lg:flex-row md:flex-row flex-col items-center justify-center md:gap-16 gap-8  ">
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
                </div> */}

                <div className="text-3xl font-bold  text-white py-4 px-2">
                  Company Overview
                </div>
                <div className=" text-clamp2 leading-[1.8] text-justify mb-8 text-white ">
                  SCAFTECH Engineering Services is a pioneering engineering firm
                  co-founded by industry veterans with a vision to redefine
                  engineering standards. Our Mission is to deliver innovative,
                  efficient, and cost-effective engineering solutions that
                  adhere to the highest safety and quality benchmarks.
                </div>
                <button
                  onClick={() => {
                    navigate("/about");
                  }}
                  className="getstarted_button"
                >
                  Read More
                </button>
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
            <div className="flex flex-col px-10  gap-5 py-10 ">
              <div className=" w-full font-semibold text-black text-clamp leading-[1] text-center text-2xl">
                Why Choose
                <span className="why_choose_new_section_area_1_title_span">
                  &nbsp; Scaftech
                </span>
              </div>
              <div className="why_choose_new_section_area_1_para text-lg   text-justify">
                With over 2 decade of industry experience, we have earned a
                reputation for excellence, supported by a wide range of
                professional qualifications and accreditations. Our team
                comprises highly skilled technical experts and instructional
                professionals, ensuring the delivery of superior quality
                services and training solutions.
              </div>
            </div>
            <div className="flex lg:flex-row flex-col">
              <div className="  grid grid-cols-1  gap-20 xl:grid-cols-3">
                <div className="why_choose_new_section_area_2_cont1_div1  hover:bg-[#2b9768]  group  flex flex-col`">
                  <div className="why_choose_new_section_area_2_cont1_div1_body flex py-5 gap-3 ">
                    <MiscellaneousServicesIcon className="why_choose_new_section_area_2_cont1_div1_icon" />
                    <div className="why_choose_new_section_area_2_cont1_div1_body_title">
                      Our Job Handling Approach
                    </div>
                    <div className="why_choose_new_section_area_2_cont1_div1_body_para  ">
                      A comprehensive understanding of the service work scope is
                      essential to achieving our core objectives of safety,
                      quality, and exceptional service delivery. This
                      foundational approach ensures precision, reliability, and
                      adherence to the highest industry standards.
                    </div>
                  </div>
                </div>
                <div className="why_choose_new_section_area_2_cont1_div1  hover:bg-[#2b9768]  group  flex flex-col`">
                  <div className="why_choose_new_section_area_2_cont1_div1_body flex py-5 gap-3 ">
                    <MiscellaneousServicesIcon className="why_choose_new_section_area_2_cont1_div1_icon" />
                    <div className="why_choose_new_section_area_2_cont1_div1_body_title">
                      Certified & Experienced Instructors
                    </div>
                    <div className="why_choose_new_section_area_2_cont1_div1_body_para  ">
                      For many years, ScafTech has been a trusted provider of
                      specialized training services to the Oil & Gas, Marine,
                      and Construction industries. Our expertise and commitment
                      to excellence have positioned us as a leader in delivering
                      tailored training solutions that meet the unique demands
                      of these sectors.
                    </div>
                  </div>
                </div>
                <div className="why_choose_new_section_area_2_cont1_div1  hover:bg-[#2b9768]  group  flex flex-col`">
                  <div className="why_choose_new_section_area_2_cont1_div1_body flex py-5 gap-3 ">
                    <MiscellaneousServicesIcon className="why_choose_new_section_area_2_cont1_div1_icon" />
                    <div className="why_choose_new_section_area_2_cont1_div1_body_title">
                      Highly Trained Personnel
                    </div>
                    <div className="why_choose_new_section_area_2_cont1_div1_body_para  ">
                      The personnel at ScafTech are highly experienced and
                      proficient in working at height. Our team specializes in a
                      range of critical services, including blasting,
                      inspection, installation, and repair, all conducted safely
                      and efficiently in elevated environments.
                    </div>
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
                      href=""
                      // href={`/services/${data.id}/${data.title}`}
                      className="home_div_section3_area_2_cont1"
                      id={data.id}
                      key={data.id}
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

      <section className="min-h-[300px] py-20 px-5">
        <div className="flex  flex-col justify-center items-center gap-10 ">
          <h2 className="w-full font-semibold text-black text-clamp leading-[1] text-center text-2xl">
            Our Awards and
            <span className="why_choose_new_section_area_1_title_span">
              &nbsp; Certifications
            </span>
          </h2>

          <p className="text-justify md:w-3/5 w-full text-lg">
            ScafTech is a globally recognized leader in delivering world-class
            Asset Integrity Assurance and Training services, supporting clients
            throughout the entire asset life-cycle. We serve a diverse range of
            industries, including Oil & Gas, Marine, and Construction.
            Leveraging the expertise of our multi-skilled workforce, we provide
            comprehensive, integrated solutions designed to address even the
            most complex asset integrity challenges. Our tailored services
            ensure optimal performance, safety, and reliability for our clients.
            With a proven track record of excellence, ScafTech has established
            itself as a premier oil servicing company and training center.
            Discover why we are the trusted partner of choice for industry
            leaders worldwide.
          </p>

          <a
            href="/certification"
            class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#082b6c] hover:bg-[#2b9768] px-6 font-medium text-neutral-200 duration-500"
          >
            <div class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
              <div class="absolute translate-x-0 opacity-100 -translate-y-0.5 transition group-hover:-translate-x-6 group-hover:opacity-0">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                >
                  <path
                    d="M7.22303 0.665992C7.32551 0.419604 7.67454 0.419604 7.77702 0.665992L9.41343 4.60039C9.45663 4.70426 9.55432 4.77523 9.66645 4.78422L13.914 5.12475C14.18 5.14607 14.2878 5.47802 14.0852 5.65162L10.849 8.42374C10.7636 8.49692 10.7263 8.61176 10.7524 8.72118L11.7411 12.866C11.803 13.1256 11.5206 13.3308 11.2929 13.1917L7.6564 10.9705C7.5604 10.9119 7.43965 10.9119 7.34365 10.9705L3.70718 13.1917C3.47945 13.3308 3.19708 13.1256 3.25899 12.866L4.24769 8.72118C4.2738 8.61176 4.23648 8.49692 4.15105 8.42374L0.914889 5.65162C0.712228 5.47802 0.820086 5.14607 1.08608 5.12475L5.3336 4.78422C5.44573 4.77523 5.54342 4.70426 5.58662 4.60039L7.22303 0.665992Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <span class="pl-6">View Accreditation & Awards</span>
              <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      {/* ======================= */}
      <section className="gallery_new_section">
        <div className="container2 flex flex-col ">
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
                  src="/new_img/3rd-party-inspection.webp"
                  alt=""
                  className="gallery_new_section_area_body_cont1_img"
                />
              </div>
              <div className="gallery_new_section_area_body_cont2">
                <img
                  src="/new_img/equipment-leasing.webp"
                  alt=""
                  className="gallery_new_section_area_body_cont2_img1"
                />
                <img
                  src="/new_img/equipment-maintenance.webp"
                  alt=""
                  className="gallery_new_section_area_body_cont2_img2"
                />
              </div>
              <div className="gallery_new_section_area_body_cont3">
                <img
                  src="/new_img/highrise-cleaning.webp"
                  alt=""
                  className="gallery_new_section_area_body_cont3_img1"
                />
                <img
                  src="/new_img/scaffolding.webp"
                  alt=""
                  className="gallery_new_section_area_body_cont3_img2"
                />
              </div>
            </div>
          </div>
          <div className="self-center">
            <a
              href="/gallery"
              class=" my-10 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#082b6c] hover:bg-[#2b9768] px-6 font-medium text-neutral-200 duration-500"
            >
              <div class="relative inline-flex -translate-x-0 items-center transition group-hover:-translate-x-6">
                <span class="pl-6">View Gallery</span>
                <div class="absolute right-0 translate-x-12 opacity-0 transition group-hover:translate-x-6 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                  >
                    <path
                      d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </a>
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
              Looking for a Leading Oil and Gas Service Provider?
            </div>
            <div className="contact_numb_div">
              {/* <span className="contact_numb_div_span">+234 816 163 7797</span> */}
              <a
                href={"https://wa.me/+2348161637797"}
                class=" rounded px-5 py-2.5 overflow-hidden group bg-green-500 relative hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-white transition-all ease-out duration-300"
              >
                <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span class="relative">Drop a Message</span>
              </a>
            </div>
          </div>
        </div>
        <img
          src="/img/last_sec_img.jpeg"
          alt=""
          className="last_new_section_bg"
        />
      </section>

      <Testimonies />
      {/* <ContactForm /> */}
      <GetInTouch />
    </div>
  );
};

export default NewHome;
