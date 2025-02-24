import React, { useEffect, useState } from "react";
import "./servicePage.css";
import "../NewHome/newhome.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";

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
import { services_data } from "../../Header/ServicesStatic";

const ServicePageModel = () => {
  const [payload, setPayload] = useState(null);
  const { url } = useParams();

  const fetchSerVice = () => {
    const service = services_data.find((service) => service.url === `/${url}`);
    console.log(service, "maybach");
    setPayload(service);
  };
  useEffect(() => {
    fetchSerVice();
  }, [url]);

  return (
    <>
      {payload && (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={transition}
          className=""
        >
          <section className="">
            <div
              className="text-start bg-[#8a97ab] md:bg-bottom bg-cover bg-center bg-no-repeat  bg-blend-multiply text-white  xl:text-6xl md:text-5xl flex justify-center items-center max-h-[40dvh] h-screen text-3xl flex-col font-extrabold "
              style={{ backgroundImage: "url('/new_img/inspection-2.jpg')" }}
            >
              <h1>{payload?.name}</h1>
            </div>
          </section>

          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={transition}
            className="p-20"
          >
            {payload.body}
          </motion.div>

          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <section>
              <div className="p-20 text-center md:w-3/4 w-full  mx-auto ">
                <div className="flex flex-col gap-4 ">
                  <h1 className="xl:text-4xl font-bold uppercase">
                    Our Awards and Certifications
                  </h1>
                  <p className="">
                    Scaftech provides World Class specialist Asset Integrity
                    Assurance and Training services throughout the Asset
                    life-cycle. We service a wide range of markets including Oil
                    and Gas, Marine, Construction, and Real Estate. With a broad
                    range of services available through our multi-skilled
                    workforce, we offer our clients the most effective,
                    integrated, packaged solution to any of their asset
                    integrity problems. See why we are the leading and highly
                    recognized oil servicing company and training centre in the
                    business…
                  </p>

                  <div className="self-center">
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
                </div>
              </div>
            </section>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ServicePageModel;
