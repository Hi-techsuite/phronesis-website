import React, { useEffect, useState } from "react";
import "./servicePage.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Slider from "react-slick";
import services from "../../Static";
import { useNavigate, useParams } from "react-router-dom";
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
        <div className="servicePageDiv">
          <section className="ServicePage1">
            <div className="container2">
              <div className="ServicePage_area">
                <div className="dash_home_products_swiper_slide_img_divb">
                  <img
                    src="/img/hero_img_3.webp"
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
                      <div className="home_div_section1_area_div_area1_txt2b">
                        {payload.title}
                      </div>
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
          <section className="ServicePage2">
            <div className="container2">{payload.body}</div>
          </section>
          <section className="home_div_section3">
            <div className="container2">
              <div className="home_div_section3_area">
                <div className="home_div_section3_area_1">
                  <div className="home_div_section3_area_1_title">
                    Other Services
                  </div>
                  <div className="home_div_section3_area_1_para">
                    As our business operations expand, so do the initiatives we
                    undertake to ensure we leave an enduring legacy of
                    protecting the planet we all inhabit.
                  </div>
                </div>

                <div className="home_div_section3_area_2">
                  <Slider {...settings} className="services_slider">
                    {services.map((data) => (
                      <div
                        className="home_div_section3_area_2_cont1"
                        id={data.id}
                      >
                        <div className="home_div_section3_area_2_cont1_img_div">
                          <img
                            src="/img/climate_img.webp"
                            alt=""
                            className="home_div_section3_area_2_cont1_img"
                          />
                        </div>
                        <div className="home_div_section3_area_2_cont1_title">
                          {data.title}
                        </div>
                        <a href={`/services/${data.id}/${data.title}`}>
                          <div className="home_div_section3_area_2_cont1_btn">
                            <ArrowForwardIcon className="home_div_section3_area_2_cont1_btn_icon" />{" "}
                            Read more
                          </div>
                        </a>
                      </div>
                    ))}
                  </Slider>
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
