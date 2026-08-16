"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

// Isolated per-character component — hooks are called at the top level here
function AnimatedChar({
  char,
  index,
  total,
  scrollYProgress,
}: {
  char: string;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollYProgress,
    [index / total, Math.min((index + 8) / total, 1)],
    [0.2, 1]
  );

  const displayChar = char === " " ? "\u00A0" : char;

  return (
    <span style={{ position: "relative", display: "inline" }}>
      {/* invisible placeholder holds space */}
      <span style={{ opacity: 0, userSelect: "none" }} aria-hidden>
        {displayChar}
      </span>
      <motion.span style={{ position: "absolute", left: 0, top: 0, opacity }}>
        {displayChar}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const chars = text.split("");

  return (
    <p ref={ref} className={className} style={style}>
      {chars.map((char, i) => (
        <AnimatedChar
          key={i}
          char={char}
          index={i}
          total={chars.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}
