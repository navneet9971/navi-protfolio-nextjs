"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 20, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    document.documentElement.classList.add("cursor-desk");

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor='hover']");
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      document.documentElement.classList.remove("cursor-desk");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] mix-blend-difference"
      style={{ x: springX, y: springY }}
    >
      <div
        className={`-translate-x-1/2 -translate-y-1/2 rounded-full bg-cream transition-all duration-200 ${
          hovering ? "h-12 w-12 opacity-90" : "h-3 w-3"
        }`}
      />
    </motion.div>
  );
};

export default CustomCursor;
