import React, { useRef, useState } from "react";

import "./home.css";
import { motion } from "framer-motion";
import { transition } from "../../utils/transition";
import { fadeIn } from "../../utils/variants";

// this is the team member page

const Team = () => {
  const mentors = [
    {
      title:
        "Project Manager | Operations and Business Development Leader | CEO, Scaftech Engineering Services",
      name: "Mabel Irom",
      experience: "",
      image:
        "/new_img/image-2.jpg",
      knowledge_mentor: "",
      writeup: `
      A seasoned operations and business development executive with over a decade of impactful experience in engineering, equipment inspection, and project management within the oil, gas, and construction industries. Mabel Irom holds a strong academic and professional background in project delivery and technical operations, and currently serves as the Chief Executive Officer of Scaftech Engineering Services, a fast growing multidisciplinary engineering company in Nigeria.
Mabel has consistently demonstrated excellence in building and executing client-centered solutions, overseeing complex projects, and managing high-performance teams across diverse technical domains. Her strategic leadership has positioned Scaftech as a preferred provider for third-party inspections, scaffolding services, equipment maintenance, and industry-focused training programs.
Extensive hands-on and executive-level experience in overseeing statutory equipment inspections, rigging operations, mechanical systems maintenance, and technical personnel deployment. Her deep understanding of regulatory frameworks and industry standards has enabled the successful delivery of high-stakes projects for clients in manufacturing, construction, and oil & gas sectors.
Proven track record of driving operational growth, fostering strategic partnerships, and aligning business operations with safety, quality, and performance goals. Her ability to balance business development with technical integrity has earned her recognition as a thought leader in engineering service innovation.`,
      socials: {
        linkedIn: "",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },

    {
      title: "HSE Specialist | Mechanical Engineer | Oil & Gas Industry Expert",
      name: "Osere Sikiru",
      experience: "",
      image:
        "/new_img/image-3.jpg",

      knowledge_mentor: "",
      writeup: `
      A seasoned Health, Safety, and Environment (HSE) professional with over 20 years of extensive experience in the oil and gas industry. Osere Sikiru holds a Bachelor of Engineering in Mechanical Engineering, Coren certified and has consistently demonstrated expertise in developing, implementing, and managing HSE systems and protocols to ensure compliance with international safety standards. His solid engineering background, combined with multiple professional HSE certifications, enables him to bridge technical and safety requirements seamlessly, fostering a culture of safety excellence across projects.
Extensive hands-on and leadership experience across upstream and downstream oil and gas operations, including offshore and onshore facilities. Proven track record of reducing incident rates, improving safety performance, and enhancing organizational HSE culture.
To contribute strategic HSE leadership within dynamic organizations, promoting operational excellence, regulatory compliance, and the safeguarding of people, assets, and the environment.`,
      socials: {
        facebooK: "",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },

    {
      title:
        "Human Resources Professional | Talent Acquisition Specialist | Organizational Development Enthusiast",
      name: "Victoria Bassey Iton",
      experience: "",
      image:
        "/new_img/images-4.jpg",

      knowledge_mentor: "",
      writeup: `Victoria is a versatile Human Resources professional with a strong foundation in strategic people management and cross-sectoral experience. She holds a Bachelor of Business Administration (BBA) in Human Resource Management and an Executive MBA (e-MBA) in International Oil and Gas Trade, positioning her uniquely at the intersection of talent development and industry expertise.
With a career marked by hands-on involvement in recruitment, performance management, organizational development, and policy implementation, Victoria brings a results-driven and people-centric approach to human capital management. Her work reflects a deep understanding of aligning HR frameworks with business goals—creating environments where both talent and organizations thrive.
She is particularly skilled at navigating the complexities of workforce planning, employee engagement, and regulatory compliance, especially within high-stakes and evolving industries like energy and oil & gas. Her e-MBA further empowers her to bring global industry insights into HR strategies that drive innovation and growth`,
      socials: {
        facebooK: "",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },

    {
      title: "Senior Operations Manager/Project manager/QHSE/Construction Manager",
      name: "George A. Osun ",
      experience: "",
      image:
        "/new_img/image-5.jpg",

      knowledge_mentor: "",
      writeup: `A motivated, seasoned research-based Engineer, Senior Project Manager with PMP & PRINCE2 Certification. He acquired a Master of Science Degree in Engineering Project Management from University of Manchester, United Kingdom, Bachelor's degree in Mechanical engineering and Diploma in Petroleum Economics and HND in Petroleum and Natural Gas Engineering respectively. He has over Twenty-five years of post-graduate industry experience while working on various Subsea Services/Flexible pipelines and EPC projects for Oil & Gas and Construction Industries in Nigeria.  Competency Profile: 
Drilling and Completion, Intervention/Workover operations, SURF Engineering/installation Management, Subsea Engineering/Installation/Equipment Rental/Topside Engineering/ Obsolescence management, Process/Petrochemical Engineering, Operations/Maintenance management, Contract Management, Project management expert, Project Controls & EVM- Cost Engineering, Procurement, Commercial management, QHSE /Construction management`,

      socials: {
        facebooK: "",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },

    {
      title: "Portfolio Summary",
      name: "DAVID UDOM E.",
      experience: "",
      image:
        "/new_img/image-6.jpg",

      knowledge_mentor: "",
      writeup: `A motivated, seasoned research-based Engineer, Senior Project Manager with PMP & PRINCE2 Certification. He acquired a Master of Science Degree in Engineering Project Management from University of Manchester, United Kingdom, Bachelor's degree in Mechanical engineering and Diploma in Petroleum Economics and HND in Petroleum and Natural Gas Engineering respectively. He has over Twenty-five years of post-graduate industry experience while working on various Subsea Services/Flexible pipelines and EPC projects for Oil & Gas and Construction Industries in Nigeria.  Competency Profile: 
Drilling and Completion, Intervention/Workover operations, SURF Engineering/installation Management, Subsea Engineering/Installation/Equipment Rental/Topside Engineering/ Obsolescence management, Process/Petrochemical Engineering, Operations/Maintenance management, Contract Management, Project management expert, Project Controls & EVM- Cost Engineering, Procurement, Commercial management, QHSE /Construction management`,

      socials: {
        facebooK: "",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },

    {
      title: "CHAIRMAN",
      name: "ACHENU C. CHARLES",
      experience: "",
      image:
        "/new_img/image-7.jpg",

      knowledge_mentor: "",
      writeup: `A motivated, seasoned research-based Engineer, Senior Project Manager with PMP & PRINCE2 Certification. He acquired a Master of Science Degree in Engineering Project Management from University of Manchester, United Kingdom, Bachelor's degree in Mechanical engineering and Diploma in Petroleum Economics and HND in Petroleum and Natural Gas Engineering respectively. He has over Twenty-five years of post-graduate industry experience while working on various Subsea Services/Flexible pipelines and EPC projects for Oil & Gas and Construction Industries in Nigeria.  Competency Profile: 
Drilling and Completion, Intervention/Workover operations, SURF Engineering/installation Management, Subsea Engineering/Installation/Equipment Rental/Topside Engineering/ Obsolescence management, Process/Petrochemical Engineering, Operations/Maintenance management, Contract Management, Project management expert, Project Controls & EVM- Cost Engineering, Procurement, Commercial management, QHSE /Construction management`,

      socials: {
        facebooK: "",
        youtube: "",
        twitter: "",
        instagram: "",
      },
    },

    //       title:
    //         "Managing Director(MD)",
    //       name: "Engineer Irom Mabel",
    //       experience: "",
    //       image:
    //         "https://images.unsplash.com/photo-1491349174775-aaafddd81942?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",

    //       knowledge_mentor: "",
    //       writeup: `A motivated, seasoned research-based Engineer, Senior Project Manager with PMP & PRINCE2 Certification. He acquired a Master of Science Degree in Engineering Project Management from University of Manchester, United Kingdom, Bachelor's degree in Mechanical engineering and Diploma in Petroleum Economics and HND in Petroleum and Natural Gas Engineering respectively. He has over Twenty-five years of post-graduate industry experience while working on various Subsea Services/Flexible pipelines and EPC projects for Oil & Gas and Construction Industries in Nigeria.  Competency Profile:
    // Drilling and Completion, Intervention/Workover operations, SURF Engineering/installation Management, Subsea Engineering/Installation/Equipment Rental/Topside Engineering/ Obsolescence management, Process/Petrochemical Engineering, Operations/Maintenance management, Contract Management, Project management expert, Project Controls & EVM- Cost Engineering, Procurement, Commercial management, QHSE /Construction management`,

    //       socials: {
    //         facebooK: "",
    //         youtube: "",
    //         twitter: "",
    //         instagram: "",
    //       },
    //     },

    {
      title: "Executive Personal Asssitant and project lead",
      name: "PEACE SUNDAY E.",
      experience: "",
      image: "/new_img/Image-1.jpg",

      knowledge_mentor: "",
      writeup: `A motivated, seasoned research-based Engineer, Senior Project Manager with PMP & PRINCE2 Certification. He acquired a Master of Science Degree in Engineering Project Management from University of Manchester, United Kingdom, Bachelor's degree in Mechanical engineering and Diploma in Petroleum Economics and HND in Petroleum and Natural Gas Engineering respectively. He has over Twenty-five years of post-graduate industry experience while working on various Subsea Services/Flexible pipelines and EPC projects for Oil & Gas and Construction Industries in Nigeria.  Competency Profile: 
Drilling and Completion, Intervention/Workover operations, SURF Engineering/installation Management, Subsea Engineering/Installation/Equipment Rental/Topside Engineering/ Obsolescence management, Process/Petrochemical Engineering, Operations/Maintenance management, Contract Management, Project management expert, Project Controls & EVM- Cost Engineering, Procurement, Commercial management, QHSE /Construction management`,

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
