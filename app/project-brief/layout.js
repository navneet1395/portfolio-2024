import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <header className="  fixed top-0  z-[50] w-full border-b backdrop-blur-sm bg-white/[0.6] dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]">
        <button className=" hover:bg-blue-500  border 1px md:p-4 p-2 h-full m-auto dark:border-white border-black rounded-sm">
          <Link href={"/"}>
            <ChevronLeft />
          </Link>
        </button>
      </header>
      <div style={{ overflowY: "auto", paddingTop: "5vh" }}>{children}</div>
    </div>
  );
};

export default layout;
