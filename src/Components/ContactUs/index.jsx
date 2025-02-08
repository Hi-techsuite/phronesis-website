import React from "react";
import "./style.css";
const ContactForm = () => {
  return (
    <section
      class="section-bg"
      style={{
        backgroundImage: `url("https://i.ibb.co/9p3Cnk9/slider-2.jpg")`,
      }}
      data-scroll-index="7"
    >
      <div class="overlay pt-100 pb-100 ">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 d-flex align-items-center">
              <div class="contact-info">
                <h2 class="contact-title">Have Any Questions?</h2>
                <p>
                  voluptas facilis dolores. Excepturi. Lorem ipsum is a dummy
                  text used to replace text in some areas just for the purpose
                  of an example. It can be used in publishing and graphic
                  design. The lorem ipsum text is usually a section of a Latin
                  text by Cicero with words altered, added and removed to make
                  it nonsensical.
                </p>
                <ul class="contact-info">
                  <li>
                    <div class="info-left">
                      <i class="fas fa-mobile-alt"></i>
                    </div>
                    <div class="info-right">
                      <h4>+11223344550</h4>
                    </div>
                  </li>
                  <li>
                    <div class="info-left text-black">
                      <i class="fas fa-at"></i>
                    </div>
                    <div class="info-right">
                      <h4>info@example.com</h4>
                    </div>
                  </li>
                  <li>
                    <div class="info-left">
                      <i class="fas fa-map-marker-alt"></i>
                    </div>
                    <div class="info-right">
                      <h4>1243 Stree New Chandigarh, INDIA</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class=" text-black">
              <div class="contact-form">
                <form id="contact-form" method="POST">
                  <input type="hidden" name="form-name" value="contactForm" />
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="first-name"
                          placeholder="Enter Your Name *"
                          required="required"
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          id="email"
                          placeholder="Enter Your Email *"
                          required="required"
                        />
                      </div>
                    </div>

                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea
                          rows="4"
                          name="message"
                          class="form-control"
                          id="description"
                          placeholder="Enter Your Message *"
                          required="required"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <button class="btn-big btn btn-bg">
                        Send Us <i class="fas fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
