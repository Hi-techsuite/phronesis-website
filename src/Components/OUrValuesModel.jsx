import React from "react";

const OUrValuesModel = ({
  icon,
  text = "Understanding and satisfying our customer's need",
}) => {
  return (
    <div
      // className="relative  min-h-[200px]  gap-5 max-w-[340px] max-h-[200px] bg-[#e7fdf4] p-10 rounded-md flex flex-col justify-around  after:content-[''] after:block after:w-[2px] after:h-24 after:bg-white after:absolute after:bottom-[-64px] after:left-1/2 after:-translate-x-1/2">
      className=" hover:bg-[#00504a] hover:text-white hover:font-bold relative  min-h-[200px]  gap-5 max-w-[340px] max-h-[200px] bg-[#e7fdf4] p-10 rounded-md flex flex-col justify-around  "
    >
      {icon}
      <p className="font-light text-2xl "> {text}</p>
      <div className="absolute "> &nbsp; </div>
    </div>
  );
};

export default OUrValuesModel;
