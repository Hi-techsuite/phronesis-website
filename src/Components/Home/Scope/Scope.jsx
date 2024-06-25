import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { transition } from "../../../utils/transition";
import { fadeIn, reveal } from "../../../utils/variants";
class App extends React.Component { 
 
  #services

  

  constructor() {
    super()
    this.#services = [
      { id: 1, name: "Environmental And Waste Management Services" },
      { id: 2, name: "Wellhead Installation and Maintenance Service" },
      { id: 3, name: "Equipment Leasing And Procurement" },
      { id: 4, name: "Oil And Gas Drilling" },
      { id: 5, name: "Well Overhauling / Stimulation Services" },
      {
        id: 6,
        name: "Hydraulic, Stimulation Coiled Tubing/ Nitrogen Services",
      },
      { id: 7, name: "Pumping Services" },
      { id: 8, name: "Electrical Logging/ Calibration Services" },
      { id: 9, name: "Open Hole, Cased Hole, Slim Hole" },
      { id: 10, name: "Bolt Tensioning Services" },
      { id: 11, name: "Hydraulic Torqueing" },
      { id: 12, name: "Casing Cutting Services" },
      { id: 13, name: "Chemical Cold, Explosive, Field Maintenance Services" },
      { id: 14, name: "Rental Of Drill Cutting Skips" },
      { id: 15, name: "Pipping Line Welding And Fabrications Services" },
      { id: 16, name: "Logistics Services" },
      { id: 17, name: "Environmental Consultancy" },
      { id: 18, name: "Civil And Mechanical Engineering" },
      { id: 19, name: "Constructions" },
      { id: 20, name: "Location Preparations" },
    ];
  }

  Getservices() {
    return (
      <section className="relative pb-16 px-0 bg-[#1D2723]">
        <div className="container2">
          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="ServicePage2_area"
          >
            <ul className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto  gap-4">

            {this.#services.map(({ name, id }) => {
              return (
                <section className="">
                  <div className="h-full">
                    {/* Card */}
                    <div className="max-w-2xl mx-auto bg-[#2B9768] shadow-lg rounded-lg">
                      <div className="px-6 py-5">
                        <div className="flex items-start">
                          {/* Icon */}
                          <svg
                            className="fill-current flex-shrink-0 mr-5"
                            width={30}
                            height={30}
                            viewBox="0 0 30 30"
                          >
                            <path
                              className="text-[#E8360E]"
                              d="m16 14.883 14-7L14.447.106a1 1 0 0 0-.895 0L0 6.883l16 8Z"
                            />
                            <path
                              className="text-[#F7B716]"
                              d="M16 14.619v15l13.447-6.724A.998.998 0 0 0 30 22V7.619l-14 7Z"
                            />
                            <path
                              className="text-[#E8360E]"
                              d="m16 14.619-16-8V21c0 .379.214.725.553.895L16 29.619v-15Z"
                            />
                          </svg>
                          {/* Card content */}
                          <div className="flex-grow truncate">
                            {/* Card header */}
                            <div className="w-full sm:flex justify-between items-center mb-3">
                              {/* Title */}
                              <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">
                                Scope #{id}
                              </h2>
                              {/* Like and comment buttons */}
                            </div>
                            {/* Card body */}
                            <div className="flex items-end justify-between whitespace-normal">
                              {/* Paragraph */}
                              <div className="max-w-md text-indigo-100">
                                <p className="mb-2">{name}</p>
                              </div>
                              {/* More link */}
                              <div
                                className="flex-shrink-0 flex items-center justify-center text-indigo-600 w-10 h-10 rounded-full bg-gradient-to-b from-indigo-50 to-indigo-100 hover:from-white hover:to-indigo-50 focus:outline-none focus-visible:from-white focus-visible:to-white transition duration-150 ml-2"
                             
                              >
                                <span className="block font-bold">
                                  <span className="sr-only">Read more</span>{" "}
                                  -&gt;
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              );
            })}
            </ul>
            {/* <div className="ServicePage2_area_cont">
              <span>PHRONESIS OIL & GAS TEK LIMITED</span> is a full service
              hazardous and non–hazardous waste transportation, management,
              disposal, complete oil and gas drilling services solution Company
              recognized for its technical expertise, commitment to safety, and
              dedication to the protection of its clients’ long-term liability.
            </div> */}

         
          </motion.div>
        </div>
      </section>
    );
   }
  
    Scope() {
        return (
          <div className=" bg-[#1D2723] servicePageDiv">
            <section className="relative bg-[#1D2723] lg:py-32 pt-32 pb-8 px-0">
              <div className="container2">
                <div className="ServicePage_area">
                  <div className="dash_home_products_swiper_slide_img_divb">
                    <img
                      src="/img/about_img.webp"
                      alt=""
                      className="dash_home_products_swiper_slide_imgb"
                    />
                    <div className="home_div_section1_fade_bg_img"></div>
                  </div>
                  <div className="home_div_section1_areab">
                    <div className="home_div_section1_area_div">
                      <div className="home_div_section1_area_div_area1">
                        <div className="home_div_section1_area_div_area1_txt1">
                          Phronesis
                        </div>
                        <motion.div
                          variants={fadeIn("Up")}
                          transition={transition()}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: false }}
                          className="home_div_section1_area_div_area1_txt2b_abt"
                        >
                          Scope of Work
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

            {this.Getservices()}
          </div>
        );
  }
  
  render() {
    return (
      <div>
        {this.Scope()}
      </div>
    )
  }
}



export default App;