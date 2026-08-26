"use client";

import { navItems } from "@/data";
import { cn } from "@/utils/cn";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export const FloatingNav = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const ids = navItems.map((item) => item.link.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <motion.div
          className="origin-left h-[2px] bg-lime"
          style={{ scaleX }}
        />
        <div className="border-b border-cream/10 bg-ink/80 backdrop-blur-xl">
          <div className="section-shell flex h-16 items-center justify-between">
            <Link href="#top" className="font-display text-lg font-bold tracking-tight">
              NK<span className="text-lime">.</span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className={cn(
                    "relative text-sm text-mute transition-colors hover:text-cream",
                    active === item.link && "text-cream"
                  )}
                >
                  {item.name}
                  {active === item.link && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 h-px w-full bg-lime"
                    />
                  )}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "h-px w-5 bg-cream transition",
                  open && "translate-y-[4px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-px w-5 bg-cream transition",
                  open && "-translate-y-[4px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col justify-end bg-ink px-6 pb-12 pt-24 md:hidden">
          {navItems.map((item, index) => (
            <Link
              key={item.link}
              href={item.link}
              onClick={() => setOpen(false)}
              className="border-t border-cream/10 py-5 font-display text-4xl font-semibold"
            >
              <span className="mr-3 font-mono text-sm text-lime">0{index + 1}</span>
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
