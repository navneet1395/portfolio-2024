"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Github, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export function FirstSection() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Welcome! I&apos;m Navneet Gupta
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          Software Engineer | Entreprenur | Freelancer
        </div><div className="flex gap-2 flex-wrap">
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
         <Link href="https://www.linkedin.com/in/navneet-gupta-jklu/" target="_blank" ><LinkedinIcon/></Link>
        </button>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
         <Link href="https://github.com/navneet1395" target="_blank" ><Github /></Link>
        </button>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
         <Link href="/Navneet_SE.pdf"  >Resume</Link>
        </button>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
         <Link href="mailto:navneetgupta@jklu.edu.in"  ><MailIcon/></Link>
        </button>
        
        </div>
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" transform rotate-45 text-xl font-bold dark:text-white"
          >
            &darr;
          </motion.div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
