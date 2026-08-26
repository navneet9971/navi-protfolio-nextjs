"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import { workExperience } from "@/data";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Experience = () => {
  const [openId, setOpenId] = useState(workExperience[0]?.id ?? 1);

  return (
    <section id="experience" className="scroll-mt-24 py-24 md:py-32">
      <div className="section-shell">
        <SectionHeader
          index="04"
          kicker="Career"
          title="Where I’ve been building."
          copy="Click a company to open the story. Current role stays on top."
        />

        <div className="divide-y divide-cream/10 border-y border-cream/10">
          {workExperience.map((job, index) => {
            const isOpen = openId === job.id;

            return (
              <article key={job.id} className="py-2">
                <button
                  type="button"
                  onClick={() => setOpenId(job.id)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left"
                >
                  <div className="flex gap-5 md:gap-8">
                    <span className="font-mono text-xs text-lime">0{index + 1}</span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold text-cream md:text-4xl">
                        {job.companyName}
                      </h3>
                      <p className="mt-1 text-sm text-mute md:text-base">{job.title}</p>
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm text-cream">{job.date}</p>
                    {job.current && (
                      <span className="mt-2 inline-block rounded-full bg-lime px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink">
                        Now
                      </span>
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-8 pl-9 md:grid-cols-[1fr_auto] md:pl-16">
                        <p className="max-w-2xl text-sm leading-relaxed text-mute md:text-base">
                          {job.desc}
                        </p>
                        <div className="flex flex-wrap content-start gap-2 md:justify-end">
                          {job.tags.map((tag) => (
                            <span
                              key={tag}
                              className="h-fit rounded-full border border-cream/15 px-3 py-1 text-xs text-cream"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
