import React from "react";
import GetInTouch from "./GetInTouch";

const ContactPage = () => {
  return (
    <section className="w-full">
      <div className="flex  flex-col xl:flex-row px-8 xl:px-20">
        <div className="flex justify-center flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.641856425938!2d3.429357174739132!3d6.440017893551238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039574fec1756fd%3A0xb93865e87f8f96bf!2sScaftech%20Engineering%20Services!5e0!3m2!1sen!2sng!4v1740738261988!5m2!1sen!2sng"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {/* <div className="flex justify-center flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.660638129738!2d7.0669074!3d4.828204499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd172742b501%3A0xc5bbf87d34d5c2ef!2s18%20Trans%20Woji%20Rd%2C%20Rumuwaji%20500102%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1686763761152!5m2!1sen!2sng"
            width="80%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>

      <section>
        <div className="px-20 py-10 grid xl:grid-cols-3  gap-10 md:grid-cols-2  grid-cols-1 w-full ">
          <div className="rounded-xl  border-2 px-10 py-10 border-[#d2d2d2]  bg-[#e3e3e3] min-h-[200px]">
            <h4 className="font-bold">Lagos Office</h4>

            <p className="">Lakowe School Gate, Ibeju-Lekki Lagos, Nigeria.</p>
          </div>
          <div className="rounded-xl  border-2 px-10 py-10  bg-[#e3e3e3] border-[#d2d2d2] min-h-[200px]">
            <h4 className="font-bold">Port Harcourt Office</h4>

            <p className="">
              Block6, 3rd Avenue Elekahia Housing Estate, Port Harcourt.
            </p>
          </div>
        </div>
      </section>

      <GetInTouch />
    </section>
  );
};

export default ContactPage;
