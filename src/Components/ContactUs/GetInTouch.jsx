import React, { useState } from "react";
import FormInput from "../Inputs/FormInput";
import { COMPOSE_EMAIL } from "./mailServices";
import Modal1 from "../Modal/Modal1";
import Lottie from "lottie-react";
import greenTick from "./Lotties/lottie-success.json";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { RingLoader, ScaleLoader } from "react-spinners";

const GetInTouch = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const [values, setValue] = useState({
    fullname: "",
    email: "",
    phone_number: "",
    message: "",
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
      message: `${message} \n Details: \r  Name: ${fullname} \r email: ${email} \r Mobile: ${phone_number}  `,
      subject: `Contact Mail from: ${fullname} - ${email}`,
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
          Get In Touch
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

        <div className="mt-20">
          {/* <p className="my-1">&nbsp;</p> */}
          <form
            action=""
            className="w-full flex  flex-col   gap-5 px-3"
            onSubmit={sendEmail}
          >
            <div className="flex  gap-5">
              <FormInput
                className=" leading-normal"
                title={"Fullname"}
                placeholder={"Full Name"}
                id={"fullname"}
                value={values.fullname}
                type={"text"}
                onChange={handleOnChnage}
              />
              <FormInput
                className=" leading-normal "
                title={"Email Address"}
                placeholder={"Email Address"}
                id={"email"}
                type={"email"}
                value={values.email}
                onChange={handleOnChnage}
              />
            </div>

            <FormInput
              title={"Phone Number"}
              placeholder={"Phone Number"}
              id={"phone_number"}
              type={"text"}
              value={values.phone_number}
              onChange={handleOnChnage}
              className=" leading-normal"
            />

            <textarea
              className="outline-none w-full min-h-min font-semibold border-b-[1px] border-[#20247b]"
              id="message"
              placeholder="Enter message"
              value={values.message}
              onChange={handleOnChnage}

              // onChange={handleOnChnage}
            />

            <button
              disabled={processing}
              className=" flex items-center  justify-center self-center bg-[#2b9768]  py-3 text-white font-semibold rounded-full w-2/6"
            >
              {processing ? <RingLoader color="#fff" size={18} /> : "Submit"}
            </button>
          </form>
        </div>
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

export default GetInTouch;
