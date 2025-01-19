"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Github, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";

export function FirstSection() {
  return (
    <AuroraBackground>
      <motion.section
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
        role="region"
        aria-labelledby="hero-title"
      >
        <h1
          id="hero-title"
          className="text-3xl md:text-7xl font-bold dark:text-white text-center"
        >
          Welcome! I&apos;m Navneet Gupta
        </h1>
        <p className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-center">
          Software Engineer | Entrepreneur | Freelancer
        </p>
        <p className="text-center dark:text-neutral-200">
          I craft scalable and elegant solutions for businesses. Let’s create
          something amazing together.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link
            href="https://www.linkedin.com/in/navneet-gupta-jklu/"
            target="_blank"
            aria-label="LinkedIn Profile"
          >
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 flex items-center gap-2">
              <LinkedinIcon /> LinkedIn
            </button>
          </Link>
          <Link
            href="https://github.com/navneet1395"
            target="_blank"
            aria-label="GitHub Profile"
          >
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 flex items-center gap-2">
              <Github /> GitHub
            </button>
          </Link>
          <Link href="/Navneet_SE.pdf" aria-label="Download Resume">
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 flex items-center gap-2">
              Resume
            </button>
          </Link>
          <Link href="mailto:navneetgupta@jklu.edu.in" aria-label="Send Email">
            <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2 flex items-center gap-2">
              <MailIcon /> Email Me
            </button>
          </Link>
        </div>
        <div className="fixed bottom-10 right-10 bg-red-100 backdrop-blur-sm p-2 rounded-full">
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="transform rotate-45 text-xl font-bold dark:text-white"
            aria-label="Scroll Down"
          >
            &darr;
          </motion.div>
        </div>
      </motion.section>
    </AuroraBackground>
  );
}
