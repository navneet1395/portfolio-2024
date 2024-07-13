import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <header className="  fixed top-0  z-[50] w-full border-b backdrop-blur-sm bg-white/[0.6] dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1] flex gap-2 justify-start items-center">
        <button className=" hover:bg-blue-500 m-0 border 1px md:p-4   h-full dark:border-white border-black rounded-sm">
          <Link href={"/"}>
            <ChevronLeft />
          </Link>
        </button>
        <div className="font-bold  text-center mx-auto pt-4">
          <h1 className="text-4xl">सेठ कुटुम्ब </h1>
          <h2>ललितपुर( बासी ), अशोकनगर, गुलाबगंज</h2>
          <h2> वंशावली चार्ट</h2>
        </div>
      </header>
      <div style={{ overflowY: "auto", marginTop: "5vh" }}>{children}</div>
    </div>
  );
};

export default layout;
