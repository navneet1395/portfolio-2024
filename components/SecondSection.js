"use client";
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
        transition={{ duration: 0.5 }}
      >
        <h1 className="dark:text-white text-black text-4xl md:text-5xl leading-snug tracking-wide font-bold">
          About me
        </h1>
        <TextGenerateEffect
          text={`I'm a software engineer with an <strong> entrepreneurial mindset </strong>, born and raised in India. Graduated with a Bachelor of Technology degree in 2023 and currently working as a Software Engineer (SE-1) at Climbax Entertainment Pvt. Ltd. Here, I lead <strong> frontend development projects </strong> using Next.js and React, contributing as a feature flow writer.\n
          Passionate about entrepreneurship, I co-founded a startup called Faco Care during the COVID-19 pandemic. This experience honed my <strong> project management </strong>, <strong> product development </strong>, and <strong> user psychology </strong> skills, allowing me to effectively translate user needs into functional applications.\n
          I'm excited to leverage my skills and experience to help others. I'm open to freelance work in <strong> Full Stack Development </strong> , <strong> Web Development </strong> and <strong> App Development </strong>, particularly projects that benefit from strong <strong> user experience </strong> and a focus on <strong> user needs </strong> . Feel free to reach out if you have any projects that align with my expertise.
          `}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default SecondSection;
