"use client";
import { useScroll, useTransform } from "framer-motion"; // Ensure correct import
import React from "react";
import { GoogleGeminiEffect } from "../ui/google-gemini-effect";

export function GoogleGeminiEffectDemo() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Changed offset
  });

  // Updated input ranges to [0, 1]
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.9], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.9], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.9], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.9], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.9], [0, 1.2]);

  return (
    <div
      className="h-[100vh] bg-[#0A0A0A] w-full rounded-md relative pt-4 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
  );
}