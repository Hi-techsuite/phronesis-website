import React from "react";
import ReactPlayer from "react-player";

const VerifyCertificate = () => {
  return (
    <div>
      <section className="NewHome_div_section2">
        <div className="h-full lg:px-20 md:px-6 xl:px-[5px] ">
          <div className="NewHome_div_section1_area2 flex justify-center w-full">
            <div className="  mt-32 text-white gap-4 ">
              <div className=" text-center xl:text-6xl md:text-5xl text-white flex text-3xl flex-col font-extrabold ">
                <p className="">Verification</p>
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

      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-867cee5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="867cee5"
        data-element_type="section"
        data-settings='{"background_background":"classic"}'
      >
        <div class="bg-[#f4f4f4] min-h-[300px] pt-10 px-20 gap-10 flex">
          <div
            class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-e2a89dc"
            data-id="e2a89dc"
            data-element_type="column"
            data-settings='{"background_background":"classic"}'
          >
            <div class="">
              <div
                class="px-20 py-10"
                data-id="5a8fbc3"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="xl:text-4xl md:text-2xl text-xl font-bold">
                    Certificate Verification
                  </h2>{" "}
                </div>
              </div>
              <div
                class="elementor-element elementor-element-967eb41 elementor-widget elementor-widget-text-editor"
                data-id="967eb41"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  Inspection &amp; Tests Limited (ITL) handles qualitative
                  equipment tests and certifications for companies.{" "}
                  <p>
                    Enter an equipment’s tests certification information to get
                    immediate results.
                  </p>{" "}
                </div>
              </div>
              <div
                class="elementor-element elementor-element-53a8b38 elementor-widget elementor-widget-text-editor"
                data-id="53a8b38"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>
                    →{" "}
                    <a href="#">
                      <strong>
                        Learn more about the ITL certification procedures
                      </strong>
                    </a>
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          <div
            class="elementor-column bg-[#041927a4] px-10 py-5 elementor-col-33 elementor-top-column elementor-element elementor-element-fefde73"
            data-id="fefde73"
            data-element_type="column"
            data-settings='{"background_background":"classic"}'
          >
            <div class="">
              <div
                class="elementor-element elementor-element-ca02c74 elementor-widget elementor-widget-text-editor"
                data-id="ca02c74"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <form>
                    <div class="flex flex-col text-white gap-4">
                      <label>Certificate ID</label>
                      <input
                        type="text"
                        id="itl_certid"
                        name="wpv-wpcf-certificate"
                        value=""
                        class="bg-white px-5 py-3 "
                        // style="width:80%;margin-left:-2px;"
                        placeholder="Enter Cert ID"
                      />
                    </div>

                    <button
                      type="submit"
                      class="bg-[#062b6c] text-white px-5 py-3 mt-5"
                      //  style="color:white;"
                    >
                      Search
                    </button>
                  </form>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyCertificate;
