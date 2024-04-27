'use client'
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const SecondSection = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="md:p-24  p-4 pt-0 dark:bg-dot-white/[0.02] bg-grid-black/[0.02]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 ,
            }}
      >
        <h1 className="dark:text-white text-black text-4xl md:text-5xl leading-snug tracking-wide font-bold">
          About me
        </h1>
        <TextGenerateEffect
          text={`I'm a software engineer with an entrepreneurial mindset, born and raised in India. Graduated with a Bachelor of Technology degree in 2023 and currently working as a Software Engineer (SE 1) at Climbax Entertainment Pvt. Ltd, leading frontend development projects and contributing as a feature flow writer.
          Passionate about entrepreneurship, I co-founded a startup called Faco Care during the COVID-19 pandemic, focusing on helping people detect and manage medical problems.`}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SecondSection;
