import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { setVariant } from "../../redux/slices/cursorSlice";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 0, y: "5vh" },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: "-1vh" },
};

const Landing = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [-600, 7000]);
  const [textNo, setTextNo] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setTextNo((prev) => (prev > 2 ? 1 : prev + 1));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="max-w-screen overflow-hidden">
      <h2
        className="text-6xl mt-28 font-medium mb-28 container-custom-xs"
        style={{
          height: "2em",
        }}
        onMouseEnter={() => {
          dispatch(setVariant("pointer"));
        }}
        onMouseLeave={() => {
          dispatch(setVariant("none"));
        }}
      >
        <span className="whitespace-nowrap">We deliver</span>
        <div className="auto-scroll text-gray-500">
          {textNo === 1 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={1}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                data-driven transformation.
              </motion.div>
            </AnimatePresence>
          ) : textNo === 2 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={2}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                software-led innovations.
              </motion.div>
            </AnimatePresence>
          ) : textNo === 3 ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={3}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                AI-powered intelligence.
              </motion.div>
            </AnimatePresence>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={1}
                variants={container}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                data-driven transformation.
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </h2>
      <motion.div
        style={{
          x,
        }}
      >
        <video
          className="w-full h-full"
          autoPlay
          loop
          muted
          preload="auto"
          poster="https://www.rapidops.com/static/Rapidops-Home-bg-poster-76160c0764f764c7e3bfaca829f7661c.png"
        >
          <source
            src="https://storage.googleapis.com/rapidops-com-website/static/RapidHome-ShortVideo-badc7d4831181587852a0c0f54fbcaee.mp4"
            type="video/mp4"
          />
        </video>
      </motion.div>
    </section>
  );
};

export default Landing;
