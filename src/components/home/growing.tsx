import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Growing = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-6000, 500]);
  return (
    <section
      ref={sectionRef}
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden isolate text-white"
    >
      <div className="wrapper container-custom-xs">
        <h2 className="text-4xl font-serif mb-20">
          15 years and still growing strong
        </h2>
        <div className="flex gap-8">
          <div className="">
            <img
              className="mb-4"
              src="https://www.rapidops.com/static/e6254104b603cc44eacca4741668d512/643ff/inc-5000.webp"
              alt=""
            />
            <p>
              Fastest growing company in the USA for years 2021, 2020 and 2019
            </p>
          </div>
          <div className="">
            <img
              className="mb-4"
              src="https://www.rapidops.com/static/e6254104b603cc44eacca4741668d512/643ff/inc-5000.webp"
              alt=""
            />
            <p>
              Fastest growing company in the USA for years 2021, 2020 and 2019
            </p>
          </div>
          <div className="">
            <img
              className="mb-4"
              src="https://www.rapidops.com/static/e6254104b603cc44eacca4741668d512/643ff/inc-5000.webp"
              alt=""
            />
            <p>
              Fastest growing company in the USA for years 2021, 2020 and 2019
            </p>
          </div>
          <div className="">
            <img
              className="mb-4"
              src="https://www.rapidops.com/static/e6254104b603cc44eacca4741668d512/643ff/inc-5000.webp"
              alt=""
            />
            <p>
              Fastest growing company in the USA for years 2021, 2020 and 2019
            </p>
          </div>
        </div>
      </div>
      <motion.div
        style={{
          x,
        }}
        className="absolute top-0 bottom-0 -left-1/4 -right-1/4 bg-black -z-10"
      ></motion.div>
    </section>
  );
};

export default Growing;
