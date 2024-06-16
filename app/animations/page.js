"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};
const gridSquareVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};
const AnimationPage = () => {
  const { scrollYProgress: completionProgress } = useScroll();
  return (
    <div>
      <h1>AnimationPage</h1>
      <motion.section
        variants={gridContainerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-3 p-10 gap-10"
      >
        <motion.div
          variants={gridSquareVariant}
          className="flex items-center justify-center gap-5 rounded-lg aspect-square bg-slate-200"
        >
          {/* Fade Up */}
          <motion.div
            className="rounded-xl dark:bg-zinc-900 w-20 h-20"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          />
          <motion.div
            className="rounded-full dark:bg-zinc-900 w-20 h-20"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeIn", delay: 0.3 }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className="flex items-center justify-center gap-5 rounded-lg aspect-square bg-slate-200"
        >
          <motion.div
            className="rounded-sm h-1/3 w-1/3 bg-rose-400 "
            animate={{
              borderRadius: ["10%", "10%", "50%", "0%"],
              scale: [1, 2, 1, 2],
              rotate: [0, 45, 90, 0],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              delay: 0.3,
              repeatDelay: 1,
            }}
          />
        </motion.div>
        <motion.div
          variants={gridSquareVariant}
          className="flex items-center justify-center gap-5 rounded-lg aspect-square bg-slate-200"
        >
          <motion.div
            drag
            className="h-1/3 w-1/3 bg-orange-500 rounded-lg cursor-grab"
            dragConstraints={{ top: -100, bottom: 100, left: -100, right: 100 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          />
        </motion.div>{" "}
        <motion.div
          variants={gridSquareVariant}
          className="flex items-center justify-center gap-5 rounded-lg aspect-square bg-slate-200"
        >
          <motion.div className="w-40 aspect-square rounded-2xl bg-yellow-500">
            <motion.div
              className="h-full w-full origin-bottom bg-purple-400 rounded-2xl"
              style={{ scaleY: completionProgress }}
            />
          </motion.div>
        </motion.div>{" "}
        <motion.div
          variants={gridSquareVariant}
          className="flex items-center justify-center gap-5 rounded-lg aspect-square bg-slate-200"
        ></motion.div>{" "}
        <motion.div
          variants={gridSquareVariant}
          className="flex items-center justify-center gap-5 rounded-lg aspect-square bg-slate-200"
        ></motion.div>
      </motion.section>
    </div>
  );
};

export default AnimationPage;
