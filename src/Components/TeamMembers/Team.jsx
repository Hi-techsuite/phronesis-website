import React, { useRef, useState } from "react";

import "./home.css";
import { motion } from "framer-motion";
import { transition } from "../../utils/transition";
import { fadeIn } from "../../utils/variants";

const Team = () => {
  const mentors = [
    {
      title: "Human Resources Management",
      name: "Victoria  Bassey Iton",
      experience: "",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww",
      knowledge_mentor: "",
      writeup:
        "HR Manager| Lead generation specialist| Social media manager & Customer  Relationship Manager",
      socials: {
        linkedIn: "https://www.linkedin.com/in/victoria-bassey-iton-304a3b79/",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },

    {
      title: "CERTIFIED MASTER TRAINER|| QAQC LEAD ||HSE LEAD",
      name: "ACHUENU CHUKWUEMEKE CHARLES",
      experience: "",
      image:
        "https://images.unsplash.com/photo-1530268729831-4b0b9e170218?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      knowledge_mentor: "",
      writeup: "",
      // "He was a director of a proprietary trading firm in London and is one of the founders of a Wealth Management firm. Denis has been a regular on CNBC giving market analysis and has trained over 500 professional traders as well as thousands of retail traders. It is an absolute honour having someone with the experience that Mr. Taranov posses, as one of the speakers and mentors at Trader's Mind Hub.",
      socials: {
        facebooK: "",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },

    {
      title: "Electromechanical Technician | Procurement | Admin Mgr",
      name: "Peace Sunday",
      experience: "10+ Years",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      knowledge_mentor: "",
      writeup:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione iure totam, illum, repellendus, voluptas amet commodi non repellat pariatur voluptatibus sint quos! Ipsa placeat dolorum perferendis perspiciatis. Recusandae, aperiam libero!",

      socials: {
        facebooK: "",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },

    {
      title:
        "HR Personnel | Virtual Assistant | Lead generation specialist | Social media manager & Customer Relationship Manager",
      name: "Victoria Bassey Iton",
      experience: "15+ Years",
      image:
        "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",

      knowledge_mentor: "",
      writeup:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione iure totam, illum, repellendus, voluptas amet commodi non repellat pariatur voluptatibus sint quos! Ipsa placeat dolorum perferendis perspiciatis. Recusandae, aperiam libero!",

      socials: {
        facebooK: "",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },
  ];
  const mentorRef = useRef(null);
  const [selected_mentor, setSelectedMentor] = useState(mentors[0]);

  return (
    <motion.section
      variants={fadeIn("up")}
      transition={transition()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      className="HomeSection7"
    >
      <div className="custom_container">
        <div className="HomeSection7_area">
          <div className="HomeSection4_area_title_div">
            <div className="HomeSection7_area_title">Team Members</div>
          </div>

          {selected_mentor && (
            <div className="pt-20" id="#mentor" ref={mentorRef}>
              <div className="HomeSection7_area_body_details">
                <div className="HomeSection7_area_body_details_div1">
                  <div className="HomeSection7_area_body_details_div1_title_div">
                    <div className="HomeSection7_area_body_details_div1_title_div1">
                      {selected_mentor.title}
                    </div>
                    <div className="HomeSection7_area_body_details_div1_title_div2">
                      {selected_mentor.name}
                    </div>
                    <div className="HomeSection7_area_body_details_div1_title_div3">
                      Experience: {selected_mentor.experience}
                    </div>
                  </div>
                  <div className="HomeSection7_area_body_details_div1_content_txt">
                    {selected_mentor.writeup}
                  </div>
                  <div className="HomeSection7_area_body_details_div1_unique_txt">
                    <div className="HomeSection7_area_body_details_div1_unique_txt_title">
                      {/* Knowledge Mentor */}
                      {/* {t("knowledge-mentor")} */}
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Sunt fugiat natus aperiam id in, repudiandae, labore
                      quidem voluptatum ipsa numquam odit. Quas in fuga
                      praesentium ullam aspernatur, culpa ipsam inventore!
                    </div>
                  </div>
                </div>
                <div className="HomeSection7_area_body_details_div2">
                  <img
                    src={selected_mentor.image}
                    alt=""
                    className="HomeSection7_area_body_details_div2_img"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="HomeSection7_area_body">
            <div className="HomeSection7_area_body_navigation ">
              {/* <OwlCarousel
              className="owl-theme py-10"
              autoplay={true}
              loop
              // autoplaySpeed={1}
              // nav
            > */}
              {mentors.map((mentor, index) => {
                return (
                  <div
                    className="item "
                    onClick={() => {
                      mentorRef.current.scrollIntoView({
                        behavior: "smooth",
                      });
                      setSelectedMentor(mentor);
                    }}
                  >
                    <div
                      className={
                        selected_mentor.name === mentor.name
                          ? "HomeSection7_area_body_navigation_cont1_active"
                          : "HomeSection7_area_body_navigation_cont1"
                      }
                    >
                      <div className="HomeSection7_area_body_navigation_cont1_img h-36 w-36">
                        <img
                          src={mentor.image}
                          alt=""
                          className="HomeSection7_area_body_navigation_cont1_img_img  "
                        />
                      </div>
                      <div className="HomeSection7_area_body_navigation_cont1_txt">
                        <div className="HomeSection7_area_body_navigation_cont1_txt_title ">
                          {mentor.name}
                        </div>
                        <div className="HomeSection7_area_body_navigation_cont1_txt_para">
                          {mentor.experience}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* </OwlCarousel> */}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
