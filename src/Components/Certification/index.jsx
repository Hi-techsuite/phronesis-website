import React from "react";
import ReactPlayer from "react-player";

const Certification = () => {
  return (
    <div>
      <section className="NewHome_div_section2">
        <div className="h-full lg:px-20 md:px-6 xl:px-[5px] ">
          <div className="NewHome_div_section1_area2 flex justify-center w-full">
            <div className="  mt-32 text-white gap-4 ">
              <div className=" text-center xl:text-6xl md:text-5xl text-white flex text-3xl flex-col font-extrabold ">
                <p className="">Awards and Certifications</p>
              </div>
            </div>
          </div>
        </div>
        <img
          src="/new_img/rooftop-fall.png"
          className="NewHome_div_section1_bg"
        />
        <div className="dark_bg"></div>
      </section>

      <section>
        <div className="flex md:flex-row px-5 flex-col md:w-4/5 mx-auto py-20 gap-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-xl uppercase font-bold">
              In addition to our quality management system, ScafTech Engineering
              Services has accreditation and membership with relevant government
              agencies, local and international professional bodies such as:
            </h3>

            <ul className="flex flex-col gap-2  list-disc text-sm">
              <li>International Association of Drilling Contractors [IADC]</li>
              <li>American Bureau of Shipping[ABS]</li>
              <li>Lifting Equipment Engineer Association (LEEA)</li>
              <li>Final Investment Decision (FID)</li>
              <li>⁠Federal Ministry of Labour (FML)</li>
              <li>⁠Occupational Safety and Health Administration (OSHA)</li>
              <li>⁠ ⁠Department of Petroleum Resources (DPR)</li>
              <li> FALLPROTEC</li>
              <li>⁠Institute of Safety Professionals of Nigeria (ISPON)</li>
            </ul>
          </div>

          <div className="">
            <ReactPlayer
              // loop
              url={"https://www.youtube.com/watch?v=E3odTnNeSA8"}
            />
          </div>
        </div>
      </section>
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
    </div>
  );
};

export default Certification;
