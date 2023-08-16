import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const images = [
  "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8438923/pexels-photo-8438923.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8728387/pexels-photo-8728387.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/5473956/pexels-photo-5473956.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8438922/pexels-photo-8438922.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2103864/pexels-photo-2103864.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8438944/pexels-photo-8438944.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8438863/pexels-photo-8438863.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2036656/pexels-photo-2036656.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8566566/pexels-photo-8566566.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/8728388/pexels-photo-8728388.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Blog = () => (
  <div className="container-custom-md columns-1 md:columns-2 lg:columns-3 mb-4">
    {images.map((img, index) => (
      <Image src={img} key={index} />
    ))}
  </div>
);

export default Blog;

const item = {
  hidden: { opacity: 0, y: "10vh" },
  show: {
    opacity: 1,
    y: 0,
  },
};

const Image = ({ src }: { src: string }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(imgRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  useEffect(() => {
    if (isInView) {
      controls.start("show").catch((err) => console.log(err));
    }
  }, [isInView, controls]);

  return (
    <motion.img
      ref={imgRef}
      variants={item}
      animate={controls}
      initial="hidden"
      className="mb-4 rounded-md"
      src={src}
      alt=""
    />
  );
};
