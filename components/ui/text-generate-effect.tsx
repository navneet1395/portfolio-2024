'use client'
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let linesArray = text.split(/\n/).filter((line) => line.trim() !== '');

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderLines = () => {
    return (
      <motion.div ref={scope}>
        {linesArray.map((line, lineIdx) => (
          <div key={`line-${lineIdx}`} className="mt-4">
            <div className="dark:text-white text-black text-md leading-snug tracking-wide">
              {line.split(" ").map((word, wordIdx) => (
                <motion.span
                  key={`word-${wordIdx}`}
                  className="dark:text-white text-black opacity-0"
                >
                  {word}{" "}
                </motion.span>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    );
  };

  return <div className="text-base">{renderLines()}</div>;
};
