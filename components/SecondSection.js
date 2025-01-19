"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { AboutMeContext } from "@/app/textExport";

const SecondSection = () => {
  return (
    <AnimatePresence>
      <motion.div
        className="md:p-24 p-4 pt-0 dark:bg-dot-white/[0.02] bg-grid-black/[0.02]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="dark:text-white text-black text-4xl md:text-5xl leading-snug tracking-wide font-bold">
          About Me
        </h1>
        <TextGenerateEffect text={AboutMeContext} />
      </motion.div>
    </AnimatePresence>
    // Interactive Animation: Use subtle animations for better user engagement.
    // CTA Button: Include a clear button to contact you, e.g., "Hire Me" or "Let’s Collaborate."
  );
};

export default SecondSection;
