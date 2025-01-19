"use client";
import React from "react";
import { ContactForm } from "./ContactForm";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const FourthSection = () => {
  return (
    <div className="h-auto py-16 w-full dark:bg-[#18181b] relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-3xl w-full px-4">
          <h2 className="text-4xl font-bold text-center text-neutral-800 dark:text-neutral-200 mb-4">
            Let's Connect
          </h2>
          <p className="text-center text-neutral-600 dark:text-neutral-400 mb-8">
            Whether you want to discuss a project, collaborate, or just say hi,
            feel free to drop a message!
          </p>
          <ContactForm />
        </div>
    </div>
  );
};

export default FourthSection;
