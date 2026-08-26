"use client";

import { cn } from "@/utils/cn";
import { useRef } from "react";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const MagneticButton = ({
  children,
  href,
  onClick,
  variant = "solid",
  className,
  type = "button",
}: MagneticButtonProps) => {
  const ref = useRef<HTMLElement>(null);

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    node.style.transform = `translate(${dx * 0.22}px, ${dy * 0.22}px)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform duration-150 will-change-transform",
    variant === "solid" && "bg-lime text-ink hover:bg-cream",
    variant === "ghost" &&
      "border border-cream/15 bg-transparent text-cream hover:border-lime hover:text-lime",
    className
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={classes}
    >
      {children}
    </button>
  );
};

export default MagneticButton;
