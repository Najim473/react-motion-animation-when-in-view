import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./ScrollMotion.scss";
const boxVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};
function SrcollMotion() {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <div>
      <motion.div
        ref={ref}
        className="box"
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      ></motion.div>
    </div>
  );
}

export default SrcollMotion;
