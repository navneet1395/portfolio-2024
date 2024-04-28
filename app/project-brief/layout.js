import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <header
        style={{ height: "10vh" }}
        className=" fixed top-0  z-[50] w-full border-b backdrop-blur-sm bg-white/[0.6] dark:bg-black/[0.6] border-neutral-200 dark:border-white/[0.1]"
      >
        <button className="m-0 border 1px h-full p-4 dark:border-white border-black rounded-sm">
          <Link href={"/"}>
            <ChevronLeft />
          </Link>
        </button>
      </header>
      <div style={{ overflowY: "auto", paddingTop: "10vh" }}>{children}</div>
    </div>
  );
};

export default layout;
