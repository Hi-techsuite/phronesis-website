import React from "react";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variants";
import { transition } from "../../utils/transition";
import ReactPlayer from "react-player";
import GetInTouch from "../ContactUs/GetInTouch";
import QuoteComponent from "../QuoteComponent";
const GetQuote = () => {
  return (
    <div>
      <QuoteComponent />
    </div>
  );
};

export default GetQuote;
