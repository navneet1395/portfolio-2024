"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function FinalSection() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-white to-[#18181b] py-4 bg-clip-text text-center text-4xl font-semibold tracking-tight text-[#18181b] dark:text-transparent md:text-6xl"
      >
        Thank you for the visit!
      </motion.h1>
    </LampContainer>
  );
}

export const LampContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-t from-gray-50 to-gray-100 dark:from-[#18181b] dark:to-[#202020] w-full">
      {/* Background Gradients */}
      <BackgroundGradient
        className="top-0 left-1/2 transform -translate-x-1/2"
        from="cyan-500"
        via="transparent"
        to="transparent"
        position="from_70deg_at_center_top"
      />
      <BackgroundGradient
        className="bottom-0 left-1/2 transform -translate-x-1/2"
        from="transparent"
        via="transparent"
        to="cyan-500"
        position="from_290deg_at_center_top"
      />
      {/* Center Glow */}
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute h-48 w-48 rounded-full bg-cyan-400 opacity-50 blur-3xl"
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 text-center">{children}</div>
    </div>
  );
};

const BackgroundGradient = ({
  className,
  from,
  via,
  to,
  position,
}: {
  className: string;
  from: string;
  via: string;
  to: string;
  position: string;
}) => {
  return (
    <div
      className={cn(
        `absolute w-[30rem] h-[30rem] bg-gradient-conic`,
        className
      )}
      style={{
        backgroundImage: `conic-gradient(${from}, ${via}, ${to})`,
        "--conic-position": position,
      }}
    ></div>
  );
};
