import React, { useState } from "react";
import FormInput from "./Inputs/FormInput";
import { COMPOSE_EMAIL } from "./ContactUs/mailServices";
import Modal1 from "./Modal/Modal1";
import Lottie from "lottie-react";
import greenTick from "./ContactUs/Lotties/lottie-success.json";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RingLoader, ScaleLoader } from "react-spinners";

const QuoteComponent = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [values, setValue] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    message: "",
    country: "",
    companyName: "",
    position: "",
    city: "",
    website: "",
  });
  const sendEmail = async (e) => {
    e.preventDefault();

    const { fullname, email, phone_number, message } = values;

    //petty validation
    if (
      fullname === "" ||
      email === "" ||
      phone_number === "" ||
      message === ""
    ) {
      toast.warn("Please fill all information");
      return;
    }
    setProcessing(true);

    const response = await COMPOSE_EMAIL({
      to: "consult@scaftechservices.com",
      // from: "goodluckcanhelp@gmail.c",
      message: `${message} \n 
      Details: \r  
      Name: ${fullname} \r 
      companyName: ${values.companyName} \r
      email: ${email} \r 
      Mobile: ${phone_number}   \r
      Country: ${values.country}  \r
      Website: ${values.website}  \r
      City: ${values.city}  \r

      
      `,
      subject: `RFQ Quote from: ${fullname} - ${email}`,
    });
    setProcessing(false);
    console.log(response);
    if (response.isOk) {
      setSuccess(true);
      navigate(0);
    }
  };

  const handleOnChnage = (e) => {
    const { value, id } = e.target;

    setValue({ ...values, [id]: value });
  };

  return (
    <section id="contact-us" className="min-h-[50vh] py-5 mx-auto  w-4/5  ">
      <div className="flex  gap-2 my-20">
        <p className="bg-[#062b6c]">&nbsp;</p>
        <p className="text-5xl font-[700] text-[45px] text-[#062b6c]">
          Send us a request for quote
        </p>
      </div>

      <div className="grid grid-cols-a1 md:grid-cols-2 w-auto ">
        <div className="py-5 flex flex-col gap-4 ">
          <div className="">
            <p className="font-[600] text-[22px]  text-[#20247b]">Mail</p>
            <a
              className="text-[#666666] text-[18px] leading-[30px]"
              href="mailto:consult@scaftechservices.com"
            >
              consult@scaftechservices.com
            </a>
          </div>
          <div>
            <p className="font-[600] text-[22px]  text-[#20247b]">Phone </p>
            <a
              className=" text-[#666666] text-[18px] leading-[30px]"
              href="tel:+234(0)8161637797"
            >
              +234-816-163-7797
            </a>
          </div>
          <div>
            <p className="font-[600] text-[22px]  text-[#20247b]">
              Office Address{" "}
            </p>
            <p className=" text-[#666666] text-[18px] leading-[30px]">
              Lakowe School Gate, Ibeju-Lekki Lagos, Nigeria.
            </p>
          </div>
        </div>

        <section>
          <form class="max-w-md mx-auto" onSubmit={sendEmail}>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="fullname"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={values.fullname}
                  onChange={handleOnChnage}
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Full Name
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="position"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  value={values.position}
                  onChange={handleOnChnage}
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Position
                </label>
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  name="floating_first_name"
                  id="email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  type={"email"}
                  value={values.email}
                  onChange={handleOnChnage}
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email Address
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  name="floating_last_name"
                  id="phone_number"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                  type={"text"}
                  value={values.phone_number}
                  onChange={handleOnChnage}
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone Number
                </label>
              </div>
            </div>

            <div className="">
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    name="floating_phone"
                    id="companyName"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    type={"text"}
                    value={values.companyName}
                    onChange={handleOnChnage}
                  />
                  <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Company Name
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    name="floating_company"
                    id="country"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                    type={"text"}
                    value={values.country}
                    onChange={handleOnChnage}
                  />
                  <label
                    for="floating_company"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Country
                  </label>
                </div>
              </div>
              <div class="grid md:grid-cols-2 md:gap-6">
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    name="floating_phone"
                    id="floating_phone"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_phone"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Website
                  </label>
                </div>
                <div class="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_company"
                    id="floating_company"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_company"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    City
                  </label>
                </div>
              </div>
            </div>

            <div className="">
              <div className="">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  RFQ Information
                </label>
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Details of Quote"
                  value={values.message}
                  onChange={handleOnChnage}
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              disabled={processing}
              class="text-white  my-10 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {processing ? (
                <RingLoader color="#fff" size={18} />
              ) : (
                "Submit RFQ"
              )}
            </button>
          </form>
        </section>
      </div>

      <Modal1 visible={success} onClose={() => setSuccess(false)}>
        <div className="min-h-[300px] h-full justify-center flex flex-col items-center">
          <Lottie className="w-[100px]" animationData={greenTick}></Lottie>
          <p className="font-bold text-2xl ">Message sent</p>
          <p className="text-center">Your message was sent successfully</p>
        </div>
      </Modal1>

      <ToastContainer />
    </section>
  );
};

export default QuoteComponent;
