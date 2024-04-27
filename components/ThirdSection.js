"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import {WorkExperienceList} from "./WorkExperienceList"
const ThirdSection = () => {
  return (
    <div className=" w-full      antialiased  dark:bg-dot-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#dce6fb"
      />
      <div className="  max-w-7xl   relative z-10  w-full ">
        <h1 class=" font-bold text-4xl md:p-24 p-4 md:text-5xl dark:text-white bg-clip-text  text-gray-900  bg-gradient-to-b from-neutral-50 to-neutral-400 dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-700">
          Work Experience
        </h1>
        <WorkExperienceList/>
      </div>
    </div>
  );
};

export default ThirdSection;
