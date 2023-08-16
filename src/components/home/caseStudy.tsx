import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const works = [
  {
    title: "HARRIS TEETER",
    short: "A fresh take on online grocery shopping",
    description:
      "How we helped Harris Teeter transform legacy systems, leverage analytics and deliver personalized omnichannel experiences for millions of shoppers?",
    bgColor: "#07a077",
    color: "254 255 221",
    img: "/imgs/1.png",
  },
  {
    title: "SALESMATE",
    short: "A unified customer experience platform",
    description:
      "How we turn an idea of automating sales and customer relationships into a multi-million-dollar revenue sales operating system with thousands of customers?",
    bgColor: "#0048cc",
    color: "255 255 255",
    img: "/imgs/2.png",
  },
  {
    title: "DIGITAL TRANSFORMATION",
    short: "Transforming mfg. giant with digital and data",
    description:
      "How we helped a multi-billion manufacturing and distribution giant to digitize and automate processes?",
    bgColor: "#5f69f7",
    gradient: "linear-gradient(81.97deg,#2d4ebd 6.68%,#656cff 96.4%)",
    color: "255 255 255",
    img: "/imgs/3.png",
  },
];

const CaseStudy = () => {
  const [slideNo, setSlideNo] = useState<1 | 2 | 3>(1);
  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center text-[#feffdd]"
      style={{
        background: works[slideNo - 1].gradient
          ? works[slideNo - 1].gradient
          : works[slideNo - 1].bgColor || "#07a077",
      }}
    >
      <AnimatePresence mode="wait">
        {slideNo === 1 ? (
          <Slide key={1} slide={works[0]} />
        ) : slideNo === 2 ? (
          <Slide key={2} slide={works[1]} />
        ) : slideNo === 3 ? (
          <Slide key={3} slide={works[2]} />
        ) : (
          <Slide key={1} slide={works[0]} />
        )}
      </AnimatePresence>
      <div className="sliders absolute top-1/2 right-12 flex flex-col gap-6 cursor-pointer">
        <div
          className={`relative w-2 h-2 rounded-full ${
            slideNo === 1
              ? "border-spaced opacity-100"
              : "opacity-50 hover:opacity-100"
          }`}
          style={{
            backgroundColor: `rgb(${works[slideNo - 1].color})`,
            border: `1px solid rgb(${works[slideNo - 1].color})`,
          }}
          onClick={() => {
            setSlideNo(1);
          }}
        />
        <div
          className={`relative w-2 h-2 rounded-full ${
            slideNo === 2
              ? "border-spaced opacity-100"
              : "opacity-50 hover:opacity-100"
          }`}
          style={{
            backgroundColor: `rgb(${works[slideNo - 1].color})`,
          }}
          onClick={() => {
            setSlideNo(2);
          }}
        />
        <div
          className={`relative w-2 h-2 rounded-full ${
            slideNo === 3
              ? "border-spaced opacity-100"
              : "opacity-50 hover:opacity-100"
          }`}
          style={{
            backgroundColor: `rgb(${works[slideNo - 1].color})`,
          }}
          onClick={() => {
            setSlideNo(3);
          }}
        />
      </div>
    </motion.section>
  );
};

const container = {
  hidden: { opacity: 0, y: "10vh" },
  show: { opacity: 1, y: 0 },
};

export default CaseStudy;
const Slide = ({
  slide: { title, short, description, color, img },
}: {
  slide: {
    title: string;
    short: string;
    description: string;
    color: string;
    img: string;
  };
}) => {
  return (
    <motion.div
      className="slide container-custom-md"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex justify-center items-center gap-28">
        <div className="img-box flex-1">
          <img className="w-full aspect-auto" src={img} alt="" />
        </div>
        <div className="content flex-1 flex flex-col gap-6">
          <p className="tracking-widest opacity-90">{title}</p>
          <h4 className="text-4xl leading-relaxed tracking-tight font-serif font-medium text-balance">
            {short}
          </h4>
          <p className="opacity-70 leading-relaxed text-balance">
            {description}
          </p>
          <button
            className="mr-auto border-b-[3px]"
            style={{
              borderColor: `rgb(${color} / 0.5)`,
            }}
          >
            View Case Study
          </button>
        </div>
      </div>
    </motion.div>
  );
};
