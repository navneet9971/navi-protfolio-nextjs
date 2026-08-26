"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { projects } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const RecentProjects = () => {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="projects" className="scroll-mt-24 py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          index="02"
          kicker="Selected work"
          title="Projects that move."
          copy="Hover a title to preview. Store links, live builds, and internal tools live here."
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex max-h-[540px] flex-col overflow-y-auto border-t border-cream/10 pr-2">
            {projects.map((project, index) => {
              const isActive = index === active;
              return (
                <button
                  key={project.id}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`group flex w-full items-start justify-between gap-4 border-b border-cream/10 py-5 text-left transition ${
                    isActive ? "text-cream" : "text-mute hover:text-cream"
                  }`}
                >
                  <span className="font-mono text-xs text-lime">
                    {String(project.id).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl font-semibold md:text-2xl">
                      {project.title}
                    </span>
                    <span
                      className={`mt-2 block max-w-md text-sm leading-relaxed text-mute transition ${
                        isActive
                          ? "opacity-100"
                          : "opacity-0 lg:h-0 lg:overflow-hidden"
                      }`}
                    >
                      {project.des}
                    </span>
                  </span>
                  <FaArrowRight
                    className={`mt-2 shrink-0 transition ${
                      isActive ? "translate-x-1 text-lime" : "opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-cream/10 bg-panel lg:min-h-[540px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                {current.img ? (
                  <Image
                    src={current.img}
                    alt={current.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,255,75,0.18),transparent_42%),linear-gradient(180deg,#141413,#0a0a09)]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-lime">
                      {current.status}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-cream md:text-3xl">
                      {current.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {current.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cream/15 bg-ink/60 px-3 py-1 text-xs text-cream backdrop-blur"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {current.links.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {current.links.map((link, index) => (
                        <Link
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${
                            index === 0
                              ? "bg-lime text-ink"
                              : "border border-cream/20 bg-ink/70 text-cream backdrop-blur"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
