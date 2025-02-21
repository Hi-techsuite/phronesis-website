import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { transition } from "../../utils/transition";
import ReactPlayer from "react-player";
import Team from "../TeamMembers/Team";
const WhoWeAre = () => {
  return (
    <div>
      <section className="">
        <div
          className="text-start bg-[#8a97ab] md:bg-bottom bg-cover bg-center bg-no-repeat  bg-blend-multiply text-white  xl:text-6xl md:text-5xl flex justify-center items-center max-h-[40dvh] h-screen text-3xl flex-col font-extrabold "
          style={{ backgroundImage: "url('/new_img/inspection-2.jpg')" }}
        >
          <h1>Who we Are</h1>
        </div>
      </section>

      <motion.div
        variants={fadeIn("Up")}
        transition={transition()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="  md:py-10 md:px-20 p-5 flex flex-col gap-3 md:w-4/5 md:mx-auto"
      >
        <p className="">
          SCAFTECH Engineering Services is a pioneering engineering firm
          co-founded by industry veterans with a vision to redefine engineering
          standards. Our Mission is to deliver innovative, efficient, and cost-
          effective engineering solutions that adhere to the highest safety and
          quality benchmarks.
        </p>

        <p className="">
          At SCAFTECH, Our CoreValues are centered around technical excellence,
          customer-centric service, and ethical business practices. We are
          committed to understanding and fulfilling our clients' diverse needs
          with professionalism and precision. Our vision is to set new
          precedents in engineering excellence and responsible business conduct,
          fostering a culture of safety, sustainability, and continuous
          learning.
        </p>

        <p className="">
          Since its inception in 2020, SCAFTECH Engineering Services has been on
          a steadfast journey towards becoming a leader in the engineering
          sector. Founded by a team of seasoned professionals with a shared
          passion for engineering innovation, SCAFTECH started as a vision to
          bring advanced engineering solutions to diverse industries.
        </p>

        <p className="">
          In its early days, the company focused on establishing a strong
          foundation in scaffolding and fabrication services, quickly gaining
          recognition for its commitment to quality and safety. Over the years,
          SCAFTECH expanded its service offerings to include comprehensive
          engineering solutions, adapting to the evolving needs of the industry.
        </p>

        <p className="">
          A significant milestone in SCAFTECH's history was the introduction of
          its training and development programs, aimed at advancing the skills
          of both its team and clients in the engineering field. This move not
          only showcased SCAFTECH's dedication to continuous improvement but
          also solidified its position as a forward-thinking and responsible
          company.
        </p>

        <p className="">
          Another key achievement was the expansion of operations to include
          more specialized services like 3rd Party Statutory Inspection and
          Rooftop Fall Protection, aligning with the latest industry standards
          and client expectations. Throughout its journey, SCAFTECH has remained
          true to its core values of technical excellence, customer-centric
          service, and ethical business practices, paving the way for its
          ongoing success and growth in the competitive engineering landscape.
        </p>
      </motion.div>

      <motion.div
        variants={fadeIn("Up")}
        transition={transition()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <section>
          <div className="flex  md:flex-row flex-col w-full md:w-4/5 mx-auto px-10 py-20 overflow-hidden gap-10">
            <div className="">
              <ReactPlayer
                // loop
                url={"https://www.youtube.com/watch?v=E3odTnNeSA8"}
              />
            </div>

            <div className="flex  flex-col gap-4 ">
              <h1 className="xl:text-4xl font-bold uppercase">
                Our Awards and Certifications
              </h1>

              <p className="">
                Scaftech provides World Class specialist Asset Integrity
                Assurance and Training services throughout the Asset life-cycle.
                We service a wide range of markets including Oil and Gas,
                Marine, Construction, and Real Estate. With a broad range of
                services available through our multi-skilled workforce, we offer
                our clients the most effective, integrated, packaged solution to
                any of their asset integrity problems. See why we are the
                leading and highly recognized oil servicing company and training
                centre in the business…
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

      <section>
        <div className=" flex justify-center flex-col  gap-10 py-10 px-10 ">
          <div className=" w-full font-semibold text-black text-clamp leading-[1] text-center text-xl">
            ACCREDITATION & PROFESSIONAL
            <span className="why_choose_new_section_area_1_title_span">
              &nbsp; MEMBERSHIPS
            </span>
          </div>

          <div className=" mx-auto w-3/5">
            <img src="/new_img/certification.png" alt="" />
          </div>
        </div>
      </section>

      <Team />
    </div>
  );
};

export default WhoWeAre;
