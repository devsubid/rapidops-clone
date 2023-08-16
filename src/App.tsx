import { type FC, lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppDispatch, useAppSelector } from "./redux/store";
import { useDispatch } from "react-redux";
import { setPosition } from "./redux/slices/cursorSlice";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./layouts/navbar";

const Blog = lazy(() => import("./pages/blog"));
const Home = lazy(() => import("./pages/home"));
const Footer = lazy(() => import("./layouts/footer"));

const container = {
  hidden: { opacity: 0, y: "10vh" },
  show: { opacity: 1, y: 0 },
};

const App: FC = () => {
  const location = useLocation();
  const cursorVariant = useAppSelector((state) => state.cursor.variant);
  const cursorPosition = useAppSelector((state) => state.cursor.position);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      dispatch(
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      );
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, [dispatch]);
  const variants = {
    none: {
      height: 32,
      width: 32,
      backdropFilter: "invert(1)",
    },
    pointer: {
      height: "full",
      width: "full",
      transformOrigin: "center",
      scale: 3.75,
      backdropFilter: "invert(1)",
    },
  };
  return (
    <div>
      <motion.div
        data-cursor
        className="fixed mix-blend-difference backdrop:invert w-[32px] h-[32px] bg-black top-0 left-0 rounded-full pointer-events-none z-20"
        variants={variants}
        animate={cursorVariant}
        style={{
          top: cursorPosition.y - 16,
          left: cursorPosition.x - 16,
        }}
      />
      <Navbar />
      <Suspense>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/blog"
              element={
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  <Blog />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
