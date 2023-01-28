import { motion } from "framer-motion";
import React, { ReactNode } from "react";

function BlackBoxTransition({ children }: { children: ReactNode }) {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        ease: [0.8, 0, 0.1, 1],
      },
    },
  };

  return (
    <div className="absolute">
      <motion.div
        initial="initial"
        animate="animate"
        className="relative bg-black w-full"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() => document.body.classList.remove("overflow-hidden")}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default BlackBoxTransition;
