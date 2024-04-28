import React from "react";
import { ContactForm } from "./ContactForm";
import {
  BackgroundGradientAnimation,
  Boxes,
} from "./ui/background-gradient-animation";
const FourthSection = () => {
  return (
    <div className="h-[40rem] my-2 w-full dark:bg-[#18181b] relative flex flex-col items-center justify-center antialiased">
      <BackgroundGradientAnimation>
        
        <ContactForm />
      </BackgroundGradientAnimation>
    </div>
  );
};

export default FourthSection;
