"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { WorkExperienceList } from "./WorkExperienceList";

const ThirdSection = () => {
  return (
    <div className="w-full antialiased dark:bg-dot-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#dce6fb"
      />
      <div className="max-w-7xl mx-auto relative z-10 w-full p-6 md:p-16">
        <h1 className="font-bold text-4xl md:text-5xl dark:text-white text-gray-900 text-center mb-8">
          Work Experience
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Explore my journey through diverse roles and impactful projects, where
          I contributed to creating exceptional digital experiences.
        </p>
        <WorkExperienceList />
      </div>
    </div>
  );
};

export default ThirdSection;
