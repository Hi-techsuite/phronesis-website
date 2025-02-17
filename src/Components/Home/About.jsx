import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import JoinLeftIcon from "@mui/icons-material/JoinLeft";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { transition } from "../../utils/transition";
import { fadeIn, reveal } from "../../utils/variants";
import OUrValuesModel from "../OUrValuesModel";
import Team from "../TeamMembers/Team";
const About = () => {
  return (
    <div className="servicePageDiv">
      <section className="relative bg-[#1D2723] lg:py-32 pt-32  px-0">
        <div
          className="  relative min-h-[50vh] bg-no-repeat bg-right-bottom  mx-4  md:w-3/4 md:mx-auto rounded-md px-10 py-20 flex flex-col gap-10 md:bg-contain bg-blend-overlay"
          style={{ backgroundImage: "url('/new_img/director.png')" }}
        >
          <div class="absolute inset-0 bg-gradient-to-r md:from-[#ebfdf7] from-[#829b97] to-white/70 md:to-transparent rounded-md   ">
            &nbsp;
          </div>
          <p className=" font-black md:text-2xl text-2xl z-[100]">
            {" "}
            Director's Statement{" "}
          </p>

          <p className=" md:w-4/5 font-sans italic text-lg z-[100]">
            <span className="font-extrabold pr-1 text-3xl font-mono">
              &ldquo;
            </span>
            With a wealth of experience in engineering disciplines, and having
            held leadership roles in some of the industry's most prestigious
            firms, Scaftech was founded to bring unparalleled value to our
            clients. The company is not just executing projects; it is building
            partnerships founded on technical excellence and a shared vision of
            a safer, more efficient world.
            <span className="font-extrabold pl-1 text-3xl font-mono">
              &rdquo;
            </span>
            <span className="font-bold  not-italic"> - Mabel</span>
          </p>
        </div>
      </section>

      <section className=" bg-[#1D2723] ">
        <h4 className="text-3xl text-center text-white py-10 font-bold">
          Our Core Values
        </h4>
        <div className="flex flex-col px-10  gap-10 ">
          <div className="grid    xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 place-items-center ">
            <OUrValuesModel
              text="Understanding and satisfying our customer's need"
              icon={<SupportAgentIcon className="text-5xl" />}
            />
            <OUrValuesModel
              text="Providing Equal Oppurtunities for our employees"
              icon={<Diversity2Icon className="text-5xl" />}
            />
            <OUrValuesModel
              text="Stretching Individual Capabilities"
              icon={<SelfImprovementIcon className="text-5xl" />}
            />

            <OUrValuesModel
              text="  Promoting A Healthy And Safe Working Environment"
              icon={<JoinLeftIcon className="text-5xl" />}
            />
          </div>

          {/* <div className=" bg-white h-1"> &nbsp;</div> */}
          <div className="grid  xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 place-items-center">
            <OUrValuesModel
              text="Promoting Commitment to Quality"
              icon={<SupportAgentIcon className="text-5xl" />}
            />
            <OUrValuesModel
              text="Encourage Initiative Construction Practices"
              icon={<Diversity2Icon className="text-5xl" />}
            />
            <OUrValuesModel
              text="Promoting Honesty and Integrity amongst our employees"
              icon={<SelfImprovementIcon className="text-5xl" />}
            />
          </div>
        </div>
      </section>
      <section className="relative py-16 bg-[#1D2723]">
        <div className="container2">
          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="mission_section_area"
          >
            <div className="home_div_section3_area_body_cont1">
              <div className="home_div_section3_area_body_cont1_title">
                Vision
              </div>
              <div className="home_div_section3_area_body_cont1_body_text">
                <div className="home_div_section3_area_body_cont1_body_text_title">
                  OUR VISION
                </div>
                <div className="home_div_section3_area_body_cont1_body_text_para">
                  With a wealth of experience in engineering disciplines, and
                  having held leadership roles in some of the industry's most
                  prestigious firms, Scaftech was founded to bring unparalleled
                  value to our clients.
                </div>
              </div>
              <div className="home_div_section3_area_body_cont1_icon">
                <svg
                  data-v-25ecef37=""
                  data-v-706ceafa=""
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    cx="4.08823"
                    cy="27.0335"
                    r="3.08824"
                    stroke="white"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <circle
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    cx="27.9115"
                    cy="27.0335"
                    r="3.08824"
                    stroke="white"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <circle
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    cx="16.0003"
                    cy="4.97105"
                    r="3.08824"
                    stroke="white"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <path
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    d="M14.0242 8.49609L5.62305 23.4981"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    d="M17.9756 8.49609L26.3767 23.4981"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    d="M8.05859 27.0273H23.9409"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="home_div_section3_area_body_cont1">
              <div className="home_div_section3_area_body_cont1_title">
                Mission
              </div>
              <div className="home_div_section3_area_body_cont1_body_text">
                <div className="home_div_section3_area_body_cont1_body_text_title">
                  OUR MISSION
                </div>
                <div className="home_div_section3_area_body_cont1_body_text_para">
                  Our Mission is to deliver innovative, efficient, and
                  cost-effective engineering solutions that adhere to the
                  highest safety and quality benchmarks
                </div>
              </div>
              <div className="home_div_section3_area_body_cont1_icon">
                <svg
                  data-v-25ecef37=""
                  data-v-706ceafa=""
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    cx="4.08823"
                    cy="27.0335"
                    r="3.08824"
                    stroke="white"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <circle
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    cx="27.9115"
                    cy="27.0335"
                    r="3.08824"
                    stroke="white"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <circle
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    cx="16.0003"
                    cy="4.97105"
                    r="3.08824"
                    stroke="white"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <path
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    d="M14.0242 8.49609L5.62305 23.4981"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    d="M17.9756 8.49609L26.3767 23.4981"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    d="M8.05859 27.0273H23.9409"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="home_div_section3_area_body_cont1">
              <div className="home_div_section3_area_body_cont1_title">
                Values
              </div>
              <div className="home_div_section3_area_body_cont1_body_text">
                <div className="home_div_section3_area_body_cont1_body_text_title">
                  OUR CORE VALUES
                </div>
                <div className="home_div_section3_area_body_cont1_body_text_para">
                  Our CoreValues are centered around technical excellence,
                  customer-centric service, and ethical business practices.
                </div>
              </div>
              <div className="home_div_section3_area_body_cont1_icon">
                <svg
                  data-v-25ecef37=""
                  data-v-706ceafa=""
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    cx="4.08823"
                    cy="27.0335"
                    r="3.08824"
                    stroke="white"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <circle
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    cx="27.9115"
                    cy="27.0335"
                    r="3.08824"
                    stroke="white"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <circle
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    cx="16.0003"
                    cy="4.97105"
                    r="3.08824"
                    stroke="white"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <path
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    d="M14.0242 8.49609L5.62305 23.4981"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    d="M17.9756 8.49609L26.3767 23.4981"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>{" "}
                  <path
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    d="M8.05859 27.0273H23.9409"
                    stroke="white"
                    stroke-width="1.5"
                  ></path>
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
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
            <div className="ServicePage2_area_cont">
              SCAFTECH Engineering Services is a pioneering engineering firm
              co-founded by industry veterans with a vision to redefine
              engineering standards. Our Mission is to deliver innovative,
              efficient, and cost- effective engineering solutions that adhere
              to the highest safety and quality benchmarks.
            </div>

            <div className="ServicePage2_area_cont">
              At SCAFTECH, Our CoreValues are centered around technical
              excellence, customer-centric service, and ethical business
              practices. We are committed to understanding and fulfilling our
              clients' diverse needs with professionalism and precision. Our
              vision is to set new precedents in engineering excellence and
              responsible business conduct, fostering a culture of safety,
              sustainability, and continuous learning.
            </div>

            <div className="ServicePage2_area_cont">
              Since its inception in 2020, SCAFTECH Engineering Services has
              been on a steadfast journey towards becoming a leader in the
              engineering sector. Founded by a team of seasoned professionals
              with a shared passion for engineering innovation, SCAFTECH started
              as a vision to bring advanced engineering solutions to diverse
              industries.
            </div>

            <div className="ServicePage2_area_cont">
              In its early days, the company focused on establishing a strong
              foundation in scaffolding and fabrication services, quickly
              gaining recognition for its commitment to quality and safety. Over
              the years, SCAFTECH expanded its service offerings to include
              comprehensive engineering solutions, adapting to the evolving
              needs of the industry.
            </div>

            <div className="ServicePage2_area_cont">
              A significant milestone in SCAFTECH's history was the introduction
              of its training and development programs, aimed at advancing the
              skills of both its team and clients in the engineering field. This
              move not only showcased SCAFTECH's dedication to continuous
              improvement but also solidified its position as a forward-thinking
              and responsible company.
            </div>
            <div className="ServicePage2_area_cont">
              Another key achievement was the expansion of operations to include
              more specialized services like 3rd Party Statutory Inspection and
              Rooftop Fall Protection, aligning with the latest industry
              standards and client expectations. Throughout its journey,
              SCAFTECH has remained true to its core values of technical
              excellence, customer-centric service, and ethical business
              practices, paving the way for its ongoing success and growth in
              the competitive engineering landscape.
            </div>
          </motion.div>
        </div>
      </section>

      <Team />
    </div>
  );
};

export default About;
