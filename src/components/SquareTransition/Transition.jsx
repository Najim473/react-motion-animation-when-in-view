import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Transition.scss";
function Transition() {
  const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={squareVariants}
        className="square"
      ></motion.div>
    </div>
  );
}

export default Transition;
